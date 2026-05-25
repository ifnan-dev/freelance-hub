import JobCard from "../JobCard"

type users={
    id:number,
    name:string,
    company:{
        name:string
    }
}

const SkillsPage = async()=>{

    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    return(
        <div>
            
        </div>
    )
}



export default SkillsPage