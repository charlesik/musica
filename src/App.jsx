import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SideBar from './components/SideBar'
import Home from './components/Home'

function App() {

  return (
    <div className="App bg-[#1D2123]  flex">
      <SideBar/>
      <Home/>
      
      
      
    </div>
  )
}

export default App
