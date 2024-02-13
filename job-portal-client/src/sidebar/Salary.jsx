import React from 'react'
import Button from '../components/Button'
import InputField from '../components/InputField'

const Salary = ({handleClick,handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <div>
        <Button onClickHandler={handleClick} value = "hourly" title ="Hourly"/>
        <Button onClickHandler={handleClick} value = "monthly" title ="Monthly"/>
        <Button onClickHandler={handleClick} value = "yearly" title ="Yearly"/>

        <InputField handleChange={handleChange} value = "" title="Any" name="test"/>
        <InputField handleChange={handleChange} value = {30}title="<30k" name="test"/>
        <InputField handleChange={handleChange} value = {50} title="<50k" name="test"/>
        <InputField handleChange={handleChange} value = {80} title="<80k" name="test"/>
        <InputField handleChange={handleChange} value = {100} title="<100k" name="test"/>
        
      </div>
    </div>
  )
}

export default Salary
