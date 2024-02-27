import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AUTH } from '../api/api';
import Task from '../components/Task';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

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

    const { translate } = useLanguage();

    // Filter tasks based on status
    const pendingTasks = tasks.filter(task => task.status === 'pending');
    const inProgressTasks = tasks.filter(task => task.status === "in-progress");
    const completedTasks = tasks.filter(task => task.status === 'completed');

    return (
        <div>
            <h2>{translate('tasks')}</h2>
            <Link to={`/add`}> <button>{translate('addTask')}</button> </Link>

            {/* Display pending tasks */}
            <div>
                <h3>{translate('pendingTasks')}</h3>
                {pendingTasks.map((task, index) => (
                    <Task key={index} {...task} />
                ))}
            </div>

            {/* Display in submission tasks */}
            <div>
                <h3>{translate('inProgressTasks')}</h3>
                {inProgressTasks.map((task, index) => (
                    <Task key={index} {...task} />
                ))}
            </div>

            {/* Display completed tasks */}
            <div>
                <h3>{translate('completedTasks')}</h3>
                {completedTasks.map((task, index) => (
                    <Task key={index} {...task} />
                ))}
            </div>
        </div>
    );
}

export default MainPage;
