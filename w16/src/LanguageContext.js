import React, { createContext, useState, useContext } from 'react';

const languages = {
    en: {
        tasks: 'Tasks',
        addTask: 'Add Task',
        editTask: 'Edit Task',
        taskName: 'Task Name',
        userName: 'Name',
        userSurname: 'Surname',
        taskDeadline: 'Deadline',
        taskStatus:'Status',
        save:'save',
        submit:'submit',
        goBack:'Go Back',
        completedTasks:"Сompleted Tasks",
        inProgressTasks:"In Progress Tasks",
        pendingTasks:"Pending Tasks"
        // Add more translations here
    },
    ka: {
        tasks: 'დავალებები',
        addTask: 'დაამატე დავალება',
        editTask: 'რედაქტირება',
        taskName: 'დავალების სახელი',
        userName: 'სახელი',
        userSurname: 'გვარი',
        taskDeadline: 'დედლაინი',
        taskStatus:'სტატუსი',
        save:"შენახვა",
        submit: "გაგზავნა",
        goBack:"უკან დაბრუნება",
        completedTasks: "შესრულებული დავალებები",
        inProgressTasks: "შესრულების პროცესში",
        pendingTasks: "განხილვის ქვეშ",
        // Add more translations here
    },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const translate = (key) => {
        return languages[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translate }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
