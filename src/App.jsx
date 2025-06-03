import { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Toaster position='bottom-right'/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
