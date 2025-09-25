import React from 'react';

type TodoItem = {
  sno: number;
  desc: string;
  title: string;

};

type TodoProps = {
  list: TodoItem[];
  Delete: (sno: number) => void;
};


export const Todo: React.FC<TodoProps> = ({ list, Delete }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {list.map((item) => (
          <li key={item.sno}>
            <strong>{item.title}</strong>: {item.desc}
            <button onClick={()=>{Delete(item.sno)}}>Delete</button>
            
            </li>
          ))}
    </ul>
      </div >
    );
  };
