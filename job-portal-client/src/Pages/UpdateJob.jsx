import React ,{useEffect, useState} from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import CreatableSelect from 'react-select/creatable'
import { useNavigate } from 'react-router-dom'


const UpdateJob = () => {
    const {id} = useParams()

        // we have used loader in  router file
    const {_id,jobTitle,minPrice,maxPrice,salaryType,jobLocation,postingDate,companyLogo,employmentType,description,skills,postedBy,createAt,companyName,experienceLevel} = useLoaderData()

    const {register,handleSubmit,watch,reset,formState: { errors },} = useForm()

    const [selectedOption,setSelectedOption] = useState(null)


    const options = [
        {value:"JavaScript", label:"JavaScript"},
        {value:"C++", label:"C++"},
        {value:"HTML", label:"HTML"},
        {value:"CSS", label:"CSS"},
        {value:"React", label:"React"},
        {value:"NodeJS", label:"NodeJS"},
        {value:"MongoDB", label:"MongoDB"},
        {value:"Redux", label:"Redux"},
        {value:"Java", label:"Java"},
        ]

        const navigate = useNavigate()
    
    const onSubmit = (data) =>{ 
        
        data.skills = selectedOption;
        data.postedBy = postedBy
        // console.log(data)
        fetch(`http://localhost:5000/update-job/${id}`,{
            method:"PATCH",
            headers:{"content-Type":'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then((result)=>{
            
            // if data is updated correctly give an alert
            if(result.acknowledged === true){
                alert("Job Updated Succesfully")
                // Go to my-job after updation
                navigate('/my-job')
            }
            else{
                alert("Some Error Occured")
            }
            reset()  
            
            
        })
        
    }

  return (
    <div>
      <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      {/* form  */}
      <div className="bg-[#F8F7F6] py-10 px-4 lg:px-16">
      
     <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
     {/* 1st row */}
       <div className='create-job-flex'>
        <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Job Title</label>
            {/* create-job-input is defined in App.css */}
            <input  className="create-job-input" type="text" defaultValue={jobTitle} {...register("jobTitle")} />
        </div>

        <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Company Name</label>
            {/* create-job-input is defined in App.css */}
            <input  className="create-job-input" type="text" placeholder="Microsoft" defaultValue={companyName} {...register("companyName")} />
        </div>

       </div>

    {/* 2nd row */}
    <div className='create-job-flex'>
        <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Minimum Salary  {"(in k)"}</label>
            {/* create-job-input is defined in App.css */}
            <input  className="create-job-input" type="text" placeholder={"\u20B9 20k"} defaultValue={minPrice} {...register("minPrice")} />
        </div>

        <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Maximum Salary {"(in k)"}</label>
            {/* create-job-input is defined in App.css */}
            <input  className="create-job-input" type="text" placeholder={"\u20B9 120k"} defaultValue={maxPrice} {...register("maxPrice")} />
        </div>

    </div>

    {/* 3rd row */}
    <div className='create-job-flex'>
        <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Salary Type</label>
            
            <select {...register("salaryType")} className='create-job-input cursor-pointer' defaultValue={salaryType}>
            <option value="" disabled className='text-black'>Choose your Salary</option>
            <option value="Hourly">Hourly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
            
            </select>
        </div>

        <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Job Location</label>
            {/* create-job-input is defined in App.css */}
            <input  className="create-job-input" type="text" placeholder={"London"} defaultValue={jobLocation} {...register("jobLocation")} />
        </div>

    </div>

    {/* 4th row */}
    <div className='create-job-flex'>
    <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Job Posting Date</label>
            {/* create-job-input is defined in App.css */}
            <input  className="create-job-input" type="date" placeholder={"2023-01-31"} defaultValue={postingDate}{...register("postingDate")} />
        </div>
        <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Experience Level</label>
            <select {...register("experienceLevel")} className='create-job-input cursor-pointer' defaultValue={experienceLevel}>
            <option value="" disabled className='text-black'>Select Experience Level</option>
            <option value="any experience">Any Experience</option>
            <option value="internship">Internship</option>
            <option value="work remotely">Work Remotely</option>
            
            </select>
        </div>
    </div>
    
    {/* 5th row */}
    <div>
    <label className='block mb-2 text-lg'>Required Skillset</label>
    <CreatableSelect 
        defaultValue={skills}
        onChange={setSelectedOption}
        options = {options}
        isMulti
        isClearable
        className="create-job-input py-4"
    />
    </div>

    {/* 6th row */}
    <div className='create-job-flex'>
        <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Logo</label>
                {/* create-job-input is defined in App.css */}
                <input  className="create-job-input" type="url" placeholder={"Place your image url : https://weshare.com/img-1.jpg"} {...register("companyLogo")} defaultValue={companyLogo} />
        </div>
        <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Employment Type</label>
            <select {...register("employmentType")} className='create-job-input cursor-pointer' defaultValue={employmentType}>
            <option value="" disabled className='text-black'>Choose your Employment Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Temporary">Temporary</option>
            <option value="Part-time">Part-time</option>
            
            </select>
        </div>
    </div>

    {/* 7th row */}
    <div className='w-full'>
    <label className='block mb-2 text-lg'>Job Description</label>
    <textarea className='w-full pl-3 py-1.5 focus:outline-none ' rows={6} defaultValue={description} {...register("description",{required: true})}/>
    </div>

    {/* 8th row */}
    {/* <div className="w-full">
    <label className='block mb-2 text-lg'>Job Posted By</label>
    <input  className="create-job-input" type="email" placeholder={"Your Email"} defaultValue={postedBy} onChange={handleChange} value = {enteredEmail}/>
    </div> */}

    {/* submit button */}
    <input type="submit" className='my-5 block mt-12 bg-blue text-white font-semibold px-8 py-2 cursor-pointer' />

    </form>
    </div>     
    </div>
    </div>
  )
}

export default UpdateJob
