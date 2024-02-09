import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AUTH } from '../api/api';
import Task from '../components/Task';
import { Link } from 'react-router-dom';

function MainPage() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const headers = {
                'Authorization': `Bearer ${AUTH}`,
            };

            try {
                const response = await axios.get('https://crudapi.co.uk/api/v1/task', { headers });
                console.log('GET response:', response.data);
                setTasks(response.data.items);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchTasks(); 
    }, []); 

    return (
        <div>
            <h1>All Tasks</h1>
           <Link to={`/add`}> <button>+ add new</button> </Link>
            {tasks.map((task, index) => (
                <Task key={index} {...task} />
            ))}
        </div>
    );
}

export default MainPage;
