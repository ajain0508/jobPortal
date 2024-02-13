import React from 'react'
import InputField from '../components/InputField'

const DateofPosting = ({handleChange}) => {
    const now = new Date();
    // converting into milliseconds
    const twentyFourHoursAgo = new Date(now-24*60*60*1000)
    const lastSevenDays = new Date(now - 7*24*60*60*1000)
    const lastMonth = new Date(now - 30*24*60*60*1000)

    // convert date to string
    // ISO string is in yyyy-mm-dd format
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10)
    const lastSevenDaysDate = lastSevenDays.toISOString().slice(0,10)
    const lastMonthDate = lastMonth.toISOString().slice(0,10)
    console.log(lastMonthDate)
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
      <InputField handleChange={handleChange} value = "" title="All time" name="test" />
      <InputField handleChange={handleChange} value = {twentyFourHoursAgoDate} title="Last 24 hours" name="test" />
      <InputField handleChange={handleChange} value = {lastSevenDaysDate} title="Last 7 days" name="test" />
      <InputField handleChange={handleChange} value = {lastMonthDate} title="Last Month" name="test" />
    </div>
  )
}

export default DateofPosting
