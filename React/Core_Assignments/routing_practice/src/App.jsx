import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Variable from './components/Variable'

function App() {

  return (
    <>
    <Routes>
      <Route path = "/home" element = {<Home/>}/>
      <Route path = "/:variable" element = {<Variable/>}/>
      <Route path = "/:variable/:color/:bgColor" element = {<Variable/>}/>

      {/* Can add a ? at the end of the pathParam to make it optional....this way you can use one route */}
      {/* <Route path = "/:variable/:color?/:bgColor?" element = {<Variable/>}/> */}

    </Routes>
    </>
  )
}

export default App
