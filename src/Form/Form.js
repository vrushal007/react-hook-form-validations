import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

function Form () {
  const [isEligible, setIsEligible] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const submitHandler = data => {
    console.log(data)
  }

  // if(watch('age')>18){
  //   setIsEligible(true)
  // }
  // if(watch('age')<=18){
  //   setIsEligible(false)
  // }
  useEffect(() => {
    // if (watch('age') > 18) {
    //   setIsEligible(true)
    // }
    // if (watch('age') <= 18) {
    //   setIsEligible(false)
    // }
    watch('age') > 18 ? setIsEligible(true) : setIsEligible(false)
  })

  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
        <input
          {...register('firstName', { required: true, pattern: /^[A-Za-z]+$/ })}
          placeholder='First Name'
        />
        {errors.firstName?.type === 'required' && <span>required field</span>}
        {errors.firstName?.type === 'pattern' && <span>characters only</span>}
        <input
          {...register('lastName', { required: true })}
          placeholder='Last Name'
        />
        {errors.lastName?.type === 'required' && <span>Required!!</span>}
        <input
          {...register('age', { required: true })}
          type='number'
          placeholder='Age'
        />
        {errors.age?.type === 'required' && <span>Required!!</span>}
        {isEligible && (
          <input
            {...register('degree', { required: true })}
            placeholder='degree'
          />
        )}
        {errors.degree?.type === 'required' && <span>Degree is required</span>}
        <button onClick={handleSubmit(submitHandler)}>submit</button>
      </form>
    </div>
  )
}

export default Form
