import React from "react"
import Person from "./components/ThePerson"
import PersonClass from "./components/ThePersonClass"
import Home from "./components/TheHome"
import TheHeader from "./components/TheHeader"

import "./App.css"

function App() {
  return (
<div className="App">
<TheHeader title="PERSONAL PAGE" />
<Home title="HOME" name="Dani" surname="Cabrera" age="32" passion="Arte" currentLearning="FullStack Development" matter="React" interestedIn="Frontend developement" hobby="dibujar" />


  <h1 className="header h1">Person</h1>
  <Person name="Louise" surname="Parker" age="17"/>
  <Person name="Laura" surname="Palmer" age="22"/>
  <Person name="Martin" surname="Dwaine" age="65"/>

  <h1 className="header h1">Person Class</h1>
  <PersonClass name="John" surname="Doe" age="32"/>
  <PersonClass name="Jane" surname="Doe" age="27"/>
  <PersonClass name="Susan" surname="Smith" age="43"/>





</div>
  )
}

export default App
