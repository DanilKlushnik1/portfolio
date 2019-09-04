import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'

import './App.css'
import Navigation from './component/Navigation/Navigation';
import Gretting from './container/Gretting/Gretting';
import Summary from './component/Summary/Summary'
import Skills from './component/Skills/Skills';
import Projects from './component/Project/Projects';
import Contacts from './component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route path = "/Skill" component = {Skills}/>
          <Route path = "/Project" component = {Projects}/>
          <Route path = "/Contact" component = {Contacts}/>
          <Route path = "/Summary" component = {Summary}/>
          <Route path = "/" exect component = {Gretting}/>
          <Redirect to = "/"/>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);

