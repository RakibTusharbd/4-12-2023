import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Man from './Components/Man/Man'
import Catagory from './Components/Catagory/Catagory'
import Shop from './Components/Shop/Shop'
import Tushar from './Components/Tushar/Tushar'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div className='is'>
      <Outlet/>
      </div> */}
      <Man></Man>
      <Catagory></Catagory>
      <Shop></Shop>
      <Tushar></Tushar>
    </div>
  )
}

export default App
