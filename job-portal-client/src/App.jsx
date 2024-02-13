import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    {/* for child routes */}
    <Outlet/> 
   
   </>
  )
}

export default App
