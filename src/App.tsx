import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Process from './Components/Process'
import Form from './Components/Form'
import {PincodeState} from './Components/PincodeState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PincodeState/>
    </>
   
  )
}

export default App
