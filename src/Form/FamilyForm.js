import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'

const FamilyForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      familyMembers: [{ name: '', age: null }]
    }
  })
  const { fields, append } = useFieldArray({
    control,
    name: 'familyMembers'
  })
  const onSubmit = data => {
    console.log(data)
  }

  const addMemberHandler = () => {
    if (!Object.keys(errors).length) {
      append({ name: '', age: '' })
    }
  }
  console.log(errors)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((member, index) => (
          <div key={index}>
            <input
              type='text'
              placeholder='Name'
              {...register(`familyMembers[${index}].name`, { required: true })}
            />
            {errors.familyMembers?.[index]?.name && (
              <span>This field is required</span>
            )}
            <input
              type='number'
              placeholder='Age'
              {...register(`familyMembers[${index}].age`, {
                required: true,
                valueAsNumber: true
              })}
            />
            {errors.familyMembers?.[index]?.age && (
              <span>This field is required</span>
            )}
          </div>
        ))}
        <button type='button' onClick={addMemberHandler}>
          Add Member
        </button>
        <button type='submit'>Submit Form</button>
      </form>
    </div>
  )
}

export default FamilyForm
