import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Rechart from './components/Rechart/Rechart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <h1 className='text-center text-7xl'>Hello from Tailwind</h1>
        <PriceList></PriceList>
        <Rechart></Rechart>
      </div>
    </>
  )
}

export default App
