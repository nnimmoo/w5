import React from 'react';
import { useLanguage } from '../LanguageContext';
import "../App.css"
const Header = () => {
    const { language, setLanguage } = useLanguage();

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <header>
            <h1>Todo App</h1>
            <select value={language} onChange={handleChangeLanguage}>
                <option value="en">English</option>
                <option value="ka">Georgian</option>
            </select>
        </header>
    );
};

export default Header;
