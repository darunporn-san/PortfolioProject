import './App.css'
import { Route,Switch } from 'react-router-dom'
import Sidebar from './modules/apps/Sidebar'
import HomePage from './modules/homepage'
import Skill from './modules/skill'
import About from './modules/about'
import Contact from './modules/contact'
import Expirence from './modules/expirence'
import i18n from './shared/lib'
import { useTranslation } from 'react-i18next';
import { useEffect ,useState} from 'react'

const  App = (props:any) =>{  
  const [active,setActive] = useState(true)
  const [times,setTimes] = useState('')
  const changeLanguage = (lang:string) =>{
    i18n.changeLanguage(lang)
    localStorage.setItem('language',lang)
    setActive(!active)
    localStorage.setItem('timestamp',JSON.stringify((new Date().getTime())))
  }
  useEffect(()=>{        
    setTimes(localStorage.getItem('timestamp') || '');
    if(localStorage !== null){
      const diff = (new Date().getTime() - (+times))/(60*1000)
      if(Math.floor(diff) > 30 && +times !== 0){
        console.log('diff more than 30');
        
        localStorage.clear()
      }else{
        console.log('diff less than 30');

      }
    }
    
    if(localStorage.getItem('language') === null){
        i18n.changeLanguage("en")
        setActive(true)
    }else if(localStorage.getItem('language') === "en"){
        i18n.changeLanguage("en")
        setActive(true)
    }else if(localStorage.getItem('language') === "th"){
        i18n.changeLanguage("th")
        setActive(false)
    }
    
},[times])
  return (
    <div className ="d-flex bd-highlight">
      <div className = "sidebar bd-highlight">
        <Sidebar changeLanguage={changeLanguage} active = {active}/>
      </div>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/skill" component={Skill} />
          <Route path="/expirence" component={Expirence} />
          <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  )
}



export default App
