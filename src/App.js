import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profilcomponent from './Profilcomponent'
const clickHandler=(name)=>{ alert(name)}

function App() {
  return (
<div className="App">
<Profilcomponent name="Lionel Messi"
                  bio="born in 24 juin 1987"
                  prof="footballer"
  clickHandler={clickHandler}>
    <div> <img src='p.png' /></div>

   </Profilcomponent></div>
  );
}

export default App;
