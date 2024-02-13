import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../components/PageHeader'

const JobDetails = () => {
    const {id} = useParams()
    const [detailOfSingleJob,setDetailOfSingleJob] = useState({})

    useEffect(()=>{
         fetch(`http://localhost:5000/all-jobs/${id}`)
         .then(res=>res.json())
         .then(result => setDetailOfSingleJob(result))
    },[])

    

    const handleApply = async () =>{
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "Public URL of  your Resume",
            inputPlaceholder: "Enter the URL"
          });
          if (url) {
            Swal.fire(`Entered URL: ${url}`);
          }
    }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <PageHeader title={"Job Detail Page" } path={"Single Job"}/>
      <h2>Job Details : {id}</h2>
      <h1>{detailOfSingleJob.jobTitle}</h1>
     
      <button className='bg-blue px-8 py-2 text-white' onClick={handleApply}>Apply Now</button>
    </div>
  )
}

export default JobDetails
