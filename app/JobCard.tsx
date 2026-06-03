"use client"
import { useState } from "react";

type JobCardProps = {
  id:number
  title: string
  budjet: string
  company: string
  featured ?:boolean
  remote?:boolean,
  applied?:boolean
};




const JobCard = (props: JobCardProps) => {
    const [applied , setApplied] =useState(false)

function handleApply(){
    setApplied(true)
}
  return (
    <div className="text-black bg-blue-200 p-5 rounded-2xl m-7 border-2 border-blue-100 text-le">
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <p>{props.budjet}</p>
      <p>{props.company}</p>
      <a href={`/jobs/${props.id}/`}>
      <button className={`bg-green-500 text-white px-6 py-2 rounded-lg`}>View Details</button>
      </a>
      <button onClick={handleApply} className={ ` bg-blue-600 ${applied?"bg-green-500":""}  text-white px-6 py-2 rounded-lg`}>{
        applied? "Applied":"Apply Now"}</button>
    </div>
  );
};

export default JobCard
