import './App.css'
import { Route,Switch } from 'react-router-dom'
import Sidebar from './modules/apps/Sidebar'
import HomePage from './modules/homepage'
import Skill from './modules/skill'
import About from './modules/about'
import Contact from './modules/contact'
import Expirence from './modules/expirence'


function App() {
  return (
    <div className ="d-flex bd-highlight">
      <div className = "sidebar bd-highlight">
        <Sidebar/>
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
