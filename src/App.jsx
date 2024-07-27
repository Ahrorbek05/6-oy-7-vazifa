import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/details/:id' element = {<Details></Details>}></Route>
        <Route path='/errorPage' element = {<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  )
}

export default App