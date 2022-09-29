import React from 'react'
import { Field, ErrorMessage } from 'formik'
// import TextError from './TextError'

export const CustomRadio =  (props) => {
  const { label, name, options, ...rest } = props
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='radio'
                  
                  id={option.value}
                  {...field}
                  {...rest}
                  
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      {/* component={TextError} */}
      <ErrorMessage  name={name} />
    </div>
  )
}
