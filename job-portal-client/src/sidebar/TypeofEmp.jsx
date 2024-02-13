import React from 'react'
import InputField from '../components/InputField'

const TypeofEmp = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Type of Employment</h4>
      <InputField handleChange={handleChange} value = "" title="All" name="test" />
      <InputField handleChange={handleChange} value = "Full-time" title="Full-time" name="test" />
      <InputField handleChange={handleChange} value = "Part-time" title="Part-time" name="test" />
      <InputField handleChange={handleChange} value = "Temporary" title="Temporary" name="test" />
    </div>
  )
}

export default TypeofEmp
