import { useState } from 'react'
// import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './components/Error'
import Single from './components/Single'
function App() {

  return (
    <div className='w-full h-full bg-slate-900'>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='movie/:id' element={<Single ></Single>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>

    </div>
  )
}

export default App
