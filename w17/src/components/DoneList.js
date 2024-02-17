import "../App.css"
import React from 'react';
import { useSelector } from 'react-redux';

const DoneList = () => {
  const doneTodos = useSelector(state => state.doneTodos);

  return (
    <div>
      <h2>Completed Tasks List</h2>
      <ul>
        {doneTodos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: 'line-through' }}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoneList;
