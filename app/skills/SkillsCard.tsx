type SkillsCardProps ={
    name : string
    username : string
    email:string
    address:string
}

const SkillsCard=(props:SkillsCardProps)=>{

    return (

        <div className="">
            <h1>{props.name}</h1>
            <p>props</p>
        </div>

    )


}