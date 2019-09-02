import React from 'react';

import './App.css'
import Navigation from './component/Navigation/Navigation';
import Gretting from './component/Gretting/Gretting';
import ForMe from './component/ForMe/ForMe';
import Skills from './component/Skills/Skills';
import Projects from './component/Project/Projects';
import Contacts from './component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <div>
        <Navigation/>
        <Gretting/>
        <ForMe/>
        <Skills/>
        <Projects/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;

