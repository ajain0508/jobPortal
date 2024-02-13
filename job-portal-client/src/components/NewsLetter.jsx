import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'

const NewsLetter = () => {
  return (
    <div>
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
        <FaEnvelopeOpenText/>
        Email me for Jobs</h3>
        <p className='text-primary/70 text-base mb-4'>Unlock career opportunities and stay ahead in your professional journey by subscribing to our job alerts. Receive personalized job notifications directly to your email inbox.</p>
        <div className='w-full space-y-4'>
           <input type="email" name='email' id='email' placeholder="name@email.com" className='w-full block py-2 pl-3 border focus:outline-none' />
           <input type="submit" name="submit" id="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor:pointer font-semibold'/>
        </div>
      </div>

      {/* 2nd Part */}
      <div className='mt-8'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
        <FaRocket/>
        Get Noticed Faster</h3>
        <p className='text-primary/70 text-base mb-4'>Receive instant notifications on new job opportunities tailored to your preferences. Unlock a swift and efficient job-hunting experience that puts you in the spotlight for the best career opportunities.</p>
        <div className='w-full space-y-4'>
           <input type="submit" name="submit" id="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor:pointer font-semibold'/>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
