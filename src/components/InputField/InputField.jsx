import React from 'react'

const InputField = ({ label, name, type, placeholder }) => {
  return (
    <div className='inputField'>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  )
}

export default InputField
