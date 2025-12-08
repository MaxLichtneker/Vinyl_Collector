import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Taskbar from './components/taskbar/Taskbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Taskbar/>
      <div className='landing-page-container'>
        <h1>YOUR COLLECTION</h1>
      </div>
    </>
  )
}

export default App
