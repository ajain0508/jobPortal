import React,{useEffect, useState} from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';
import NewsLetter from '../components/NewsLetter.jsx';

const Home = () => {
    const [selectedCategory,setSelectedCategory] = useState(null);
    const [jobs,setJobs] = useState([])
    const [isLoading,setIsloading] = useState(true)
    const [currentPage,setCurrentPage] = useState(1)
    const itemsPerPage = 6;

    useEffect(()=>{
        setIsloading(true)
        fetch("http://localhost:5000/all-jobs")
        .then((res)=> res.json())
        .then(data => setJobs(data))
        setIsloading(false)
    },[])
    
    const [query,setQuery] = useState("")
    const handleInputChange = (event)=>{
        setQuery(event.target.value)     
    }
   
    // filter jobs by title 
    // The indexOf() method returns the position of the first occurrence of a value in a string.
    // filteredItems this function tells if given string is present in jobtitle
    // filteredItems sirf wahi hai jinka index -1 nahi hai
    const filteredItems = jobs.filter((job)=> job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    
    // ----------------------Radio Filtering --------------------------------//
    const handleChange = (event)=>{
        setSelectedCategory(event.target.value)
    }

    // ----------------------Button Filtering --------------------------------//
    const handleClick = (event)=>{
        setSelectedCategory(event.target.value)
    }

    // calculate the index range
   const calculatePageRange = ()=>{
      const startIndex = (currentPage - 1)*itemsPerPage;
      const endIndex = startIndex+itemsPerPage;

      return {startIndex,endIndex}
   }
   
    //function for next page
    const nextPage = ()=>{
        if(currentPage<Math.ceil(LastRes.length/itemsPerPage)){
             setCurrentPage(currentPage+1)
        }
    }
    
    // function for previous page
    const prevPage = ()=>{
        if(currentPage>1){
             setCurrentPage(currentPage-1)
        }
    }

    // main functions
    // Filtering is based on (query passed + selected button)
    // LastRes stores array of final filtered elements
    let LastRes = filteredItems
    const filteredData = (jobs,selected, query)=>{
        let filteredJobs = jobs

        // filtering input items
        if(query){
            filteredJobs = filteredItems
        }

        // category filtering
        if(selected){
            filteredJobs = filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate})=>(
               jobLocation.toLowerCase() === selected.toLowerCase() || 
               parseInt(maxPrice) <= parseInt(selected) ||
               salaryType.toLowerCase() === selected.toLowerCase() ||
               employmentType.toLowerCase() === selected.toLowerCase() ||
               experienceLevel.toLowerCase() === selected.toLowerCase() 
            ))
        }

        // Done separately for postingDate as it was clashing with maxPrice
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/
        if(dateRegex.test(selected)){
            filteredJobs = filteredJobs.filter(({postingDate})=>(postingDate >= selected ))
        }
        
        LastRes = filteredJobs
        // slice the data based on current page 
        const {startIndex,endIndex} = calculatePageRange();
        filteredJobs = filteredJobs.slice(startIndex,endIndex)
        
        return filteredJobs.map((data,i)=> <Card key = {i} data = {data}/>)
    }

    // calling main function
   const result = filteredData(jobs,selectedCategory,query)
//    console.log(LastRes)


  return (
    
    <div>
      <Banner query = {query} handleInputChange = {handleInputChange}/>

        {/* main content */}
        <div className="bg-[#F8F7F6] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">

            {/* left side */}
            <div className='bg-white p-4 rounded'><Sidebar handleChange={handleChange} handleClick={handleClick}/></div>

            {/* jobs */}
            <div className='col-span-2 bg-white p-4 rounded'> {isLoading ? (<p className='font-medium'>Loding...</p>): result.length>0 ?<Jobs result = {result}/>: <><h3 className='font-bold'>0 Jobs</h3><p>No Jobs Found</p></>}

            {/* pagenation (page chnage Next and Previous)*/}
              {
                result.length>0 ? (
                    <div className='flex justify-center mt-4 space-x-8'>
                        <button className='hover:underline'onClick={prevPage} disabled={currentPage===1}>Previous</button>
                        <span>Page {currentPage} of {Math.ceil(LastRes.length/itemsPerPage)}</span>
                        <button className='hover:underline' onClick={nextPage} disabled={currentPage===Math.ceil(LastRes.length/itemsPerPage)}>Next</button>
                    </div>

                ):""
              }
            </div>
            {/* right side */}
            <div className='bg-white p-4 rounded'><NewsLetter/></div>
        </div>
    </div>
    
  )
}

export default Home
