import React from 'react'

export const Error = ({message}) => {
  return (
    <div>
      <p>
      There was an error
        </p>
   <p>{message}</p> 
    Refresh your page
    </div>
  )
}
