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
  const { t } = useTranslation();  
  const [active,setActive] = useState(true)

  console.log('t',t('menu_contact'));
  const changeLanguage = (lang:string) =>{
    i18n.changeLanguage(lang)
    localStorage.setItem('language',lang)
    setActive(!active)
  }
  useEffect(()=>{        
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
},[])
  // useEffect(()=>{
  //   if (!initialized) {
  //     changeLanguage(localStorage.getItem("language") || "en");
  //     setInitialized(true);
  //   }
  // })
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
