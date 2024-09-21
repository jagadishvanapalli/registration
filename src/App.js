import React from 'react'
import Home from './Home'
import Edit from './Edit'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/edit' exact Component={Edit}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
