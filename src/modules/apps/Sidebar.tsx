import React from 'react'

const memu2 = [
    {
        name:"Home",
        icon:"home",
        to:'/'
    },
    {
        name:"About ",
        icon:"person_outline",
        to:'/about'
    },
    {
        name:"Skill",
        icon:"lightbulb",
        to:'skill'
    },
    {
        name:"Work Expirence",
        icon:"work_outline",
        to:'/expirence'
    },
    {
        name:"Contact",
        icon:"forum",
        to:'/contact'
    }
]
const Sidebar= () => {
    return(
        <>
        <div className ="logosidebar">
            <img src="logods.png" width="100" height ="100"/>
        </div>
        <div className = "allMenu">
            {memu2.map((p:any)=>{
                return (<a href={p.to}>
                    <div className = "nameMenu py-3">
                        <i className="material-icons md-24" style={{verticalAlign:'top'}}>{p.icon}</i>
                            <label className = "ml-2 mb-0" style={{cursor:'pointer'}}>{p.name}</label>
                       
                    </div> </a>
                   
                )
            })}
        </div>
        </>
    )
}
export default Sidebar