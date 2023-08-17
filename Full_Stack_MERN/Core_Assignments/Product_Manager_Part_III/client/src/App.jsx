import './App.css'
import DisplayOne from './components/DisplayOne'
import Update from './components/Update'
import HomePage from './views/HomePage'
import{ Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path = "/products" element = {<HomePage/>} default/>
      <Route path = "/products/:id" element = {<DisplayOne/>}/>
      <Route path = "/products/edit/:id" element = {<Update/>}/>
    </Routes>
    </>
  )
}

export default App
