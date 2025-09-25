import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Process from './Components/Process'
import Form from './Components/Form'
import {PincodeState} from './Components/PincodeState'

import {Todo} from './Components/Todo';
function App() {
  // const [count, setCount] = useState(0)
  const[todo,Settodo]=useState([{
    sno:1,
    desc:"testing",
    title:"Wake up",
      


  }]);
  const Delete=(sno:number)=>{
   todo.filter((item)=>{
    Settodo(prev => prev.filter(item => item.sno !== sno));   })
  }
 
  return (
    <>
    <Todo list={todo} Delete={Delete}/>
    </>
   
  )
}

export default App
