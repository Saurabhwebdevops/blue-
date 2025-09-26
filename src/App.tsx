import { useId, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Process from './Components/Process'
import Form from './Components/Form'
import {PincodeState} from './Components/PincodeState'
import { Addtodo } from './Components/Addtodo';

import {Todo} from './Components/Todo';
type TodoItem = {
  sno: number;
  desc: string;
  title: string;
};
function App() {
  
  // const [count, setCount] = useState(0)
  const[todo,Settodo]=useState([{
    sno:1,
    desc:"testing",
    title:"Wake up",
  }]);
  const Add = (newItem: TodoItem) => {
    newItem.sno=Math.floor(Math.random()*10);
  Settodo(prev => [...prev, newItem]);
};

  const Delete=(sno:number)=>{
   todo.filter((item)=>{
    Settodo(prev => prev.filter(item => item.sno !== sno));   })
  }
  
  return (
    <>
    <Todo list={todo} Delete={Delete}/>
          <Addtodo onAdd={Add} />

    </>
   
  )
}

export default App
