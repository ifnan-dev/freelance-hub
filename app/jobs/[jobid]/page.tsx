"use client"
interface props{
    params:Promise<{
        jobid:string
    }>
}

const JobDetails =async ({params}:props)=>{
    const {jobid} = await params
    return(
        <div>
            <h1 className="text-4xl font-bold mb-8">Job Details</h1>
            <h1 className="text-2xl font-bold mb-8">{jobid}</h1>
        </div>
    )
}

export default JobDetails