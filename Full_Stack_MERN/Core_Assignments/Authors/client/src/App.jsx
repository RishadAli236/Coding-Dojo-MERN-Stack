import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import DisplayAll from './components/DisplayAll'
import Form from './components/Form'
import Edit from './components/Edit'

function App() {
  const [authorList, setAuthorList] = useState([])

  return (
    <>
  <h1>Favorite Authors</h1>
    <Routes>
      <Route path='/authors' element = {<DisplayAll authorList ={authorList} setAuthorList = {setAuthorList}/>}/>
      <Route path='/authors/new' element = {<Form authorList ={authorList} setAuthorList = {setAuthorList}/>}/>
      <Route path='/authors/:id' element = {<Edit authorList ={authorList} setAuthorList = {setAuthorList}/>}/>
    </Routes>
    </>
  )
}

export default App
