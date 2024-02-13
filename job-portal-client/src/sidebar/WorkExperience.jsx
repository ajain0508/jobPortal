import React from 'react'
import InputField from '../components/InputField'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Work Experience</h4>
      <InputField handleChange={handleChange} value = "Any Experience" title="Any Experience" name="test" />
      <InputField handleChange={handleChange} value = "Internship" title="Internship" name="test" />
      <InputField handleChange={handleChange} value = "Work Remotely" title="Work Remotely" name="test" />
      
    </div>
  )
}

export default WorkExperience
