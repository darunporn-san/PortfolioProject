import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { withTranslation, WithTranslation } from 'react-i18next';
import i18n from '../../shared/lib'
interface ISidebar{
    active:boolean
    changeLanguage?:(action:any)=>void
}
const memu2 = [
    {
        name:"Home",
        tran:"menu_home",
        icon:"home",
        to:'/'
    },
    {
        name:"About ",
        tran:"menu_about",
        icon:"person_outline",
        to:'/about'
    },
    {
        name:"Skill",
        tran:"menu_skill",
        icon:"lightbulb",
        to:'skill'
    },
    {
        name:"Work Expirence",        
        tran:"menu_expirence",
        icon:"work_outline",
        to:'/expirence'
    },
    {
        name:"Contact",
        tran:"menu_contact",
        icon:"forum",
        to:'/contact'
    }
]
const Sidebar:React.FC<ISidebar>= (props:any) => {
    const { t } = useTranslation();
    // const changeLanguage = (lang:string) =>{
    //     i18n.changeLanguage(lang)
    //     setActive(!active)
    // }

    return(
        <>
        <div className ="logosidebar">
            <img className="logo" id = "logos" src="logods.png" />
        </div>
        <div className = "allMenu">
            {memu2.map((p:any,i:number)=>{
                return (
                    <a href={p.to} style={{textDecoration:'none'}}>
                        <div className = "nameMenu py-3">
                            <i className="material-icons md-24" style={{verticalAlign:'top'}}>{p.icon}</i>
                            <label className = "menuName ml-2 mb-0" style={{cursor:'pointer'}} id = {"menuName"+i}>{t(p.tran)}</label>
                        </div> 
                    </a>
                   
                )
            })}
        </div>
        <div className = "languageChange" id = "languageChange">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick = {props.changeLanguage.bind(this,'en')} disabled={props.active}>EN</button>
                <button type="button" className="btn btn-primary" onClick = {props.changeLanguage.bind(this,'th')} disabled={!props.active}>TH</button>
            </div>
        </div>
       
        </>
    )
}
export default Sidebar