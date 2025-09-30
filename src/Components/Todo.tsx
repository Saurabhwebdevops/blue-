import React from 'react';
import { Product } from './Product';

type TodoItem = {
  sno: number;
  desc: string;
  title: string;
};

type TodoProps = {
  list: TodoItem[];
  Delete: (sno: number) => void;
  Add: (newItem: TodoItem) => void;
};

export const Todo: React.FC<TodoProps> = ({ list, Delete, Add }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {list.length === 0 ? (
        <p>No todos available.</p>
      ) : (
        <ul>
          {list.map((item) => (
            <li key={item.sno}>
              <strong>{item.title}</strong>: {item.desc}
              <button onClick={() => Delete(item.sno)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <Product/>
    </div>
  );
};
