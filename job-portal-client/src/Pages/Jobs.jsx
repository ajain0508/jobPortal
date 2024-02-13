import React from 'react'

const Jobs = ({result}) => {
  // console.log(typeof(result))
  // result is an OBJECT
  return (
    <>
    <div className='font-bold'>{result.length} Jobs</div>
    <div>{result}</div>
      
    </>
  )
}

export default Jobs
