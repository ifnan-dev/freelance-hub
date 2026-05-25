"use client"
import { title } from "process"
import JobCard from "./JobCard"
import { useState } from "react"







const JobsData=[
    {
        id:1,
        title : "Developer",
        budjet : "900",
        company : "OSTA",
        featured: true,
        remote:true,
        applied:true
    },
    {
        id:2,
        title : "Marketing Manager",
        budjet : "900",
        company : "OSTA",
       featured: true,
       remote:true,
        applied:true
    },
    {
        id:3,
        title : "Influencer",
        budjet : "900",
        company : "OSTA",
        featured: false,
        remote:true,
        applied:true
    },


]



const Jobs =()=>{

    const [loading, setLoading]=useState(false)


    if(loading){
        return(
            <h1 className="text-blue-600 text-2xl">Loading</h1>
        )
    }

    return(
        <div className="flex flex-row">
            {JobsData.map(({title,budjet,company,featured,remote,applied},index)=>(
                featured? <JobCard title={title} budjet={budjet} company={company}   />
:<></>
            ))}
        </div>
       
    )
}

export default Jobs