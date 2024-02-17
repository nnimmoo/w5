import "../App.css"

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const TodoApp = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = () => {
        if (text.trim() !== '') {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div>
            <h1>Todo App</h1>
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleSubmit}>Add Task</button>
        </div>
    );
};

export default TodoApp;
