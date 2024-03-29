import React from 'react'
import Location from './Location'
import Salary from './Salary'
import WorkExperience from './WorkExperience'
import DateofPosting from './DateofPosting'
import TypeofEmp from './TypeofEmp'

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2'>Filters</h3>
      <Location handleChange = {handleChange}/>
      <Salary handleClick = {handleClick} handleChange = {handleChange}/>
      <DateofPosting handleChange = {handleChange}/>
      <WorkExperience handleChange = {handleChange}/>
      <TypeofEmp handleChange = {handleChange}/>
    </div>
  )
}

export default Sidebar
