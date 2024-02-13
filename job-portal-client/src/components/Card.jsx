/* eslint-disable react/prop-types */
import React from 'react'
import {Link} from "react-router-dom"
import {FiClock, FiMapPin,FiCalendar} from "react-icons/fi"
import { FaIndianRupeeSign } from "react-icons/fa6";

const Card = ({data}) => {
//  data is array of all the jobs
  const {_id,companyName,companyLogo,minPrice,maxPrice,jobTitle,salaryType,jobLocation,postingDate,experienceLevel,employmentType,description} = data

  return (
    <section className='card'>
        <Link to={`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
            <img style={{width:"73px", height:"72px"}} src={companyLogo} alt="" />
            <div>
              <h4 className='text-primary mb-1'>{companyName}</h4>
              <h3 className='text-lg semibold mb-2'>{jobTitle}</h3>

              <div className='text-primary/70 text-base flex flex-wrap mb-2 gap-3'>
                <span className='flex items-center'><FiMapPin/> {jobLocation}</span>
                <span className='flex items-center'><FiClock/> {employmentType}</span>
                <span className='flex items-center'><FaIndianRupeeSign/>{minPrice}k - <FaIndianRupeeSign/>{maxPrice}k</span>
                <span className='flex items-center'><FiCalendar/> {postingDate}</span>
              </div>
              <p className='text-base text primary/70'>{description}</p>
            </div>
        </Link>
    </section>
  )
}

export default Card

