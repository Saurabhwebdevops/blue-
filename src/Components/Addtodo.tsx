import React, { useId, useState } from 'react'

type TodoItem = {
  sno: number;
  desc: string;
  title: string;
  
};

type ListData={
    onAdd:(newItem:TodoItem)=>void;

}
export const Addtodo:React.FC<ListData> = ({onAdd}) => {
const[data,setData]=useState({
    desc:'',
    title:'',
    
});
const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    let{name,value}=e.target;
    setData({...data,
     [name]:value,
 
    });
}
const Submitinfo=(e:React.MouseEvent<HTMLInputElement>)=>{
    e.preventDefault();
    const newTodo:TodoItem={
        
        title:data.title,
        desc:data.desc,
    };
    onAdd(newTodo);
        setData({ title: '', desc: '' }); // Clear form
      
}
    return (
    <div>
     <input type="text" name="desc" onChange={handleChange}  value={data.desc}/>
     <input type="text" name="title" onChange={handleChange} value={data.title}/>
     <button onClick={Submitinfo}>Submit</button> 
    </div>
  )
}
