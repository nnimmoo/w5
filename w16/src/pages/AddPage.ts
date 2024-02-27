import React, { useState } from 'react';
import axios from 'axios';
import { AUTH } from '../api/api';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

function AddPage(props) {
  const { translate } = useLanguage();
  const [formData, setFormData] = useState({
    taskname: '',
    name: '',
    surname: '',
    deadline: '',
    status: 'pending' // Initial status set to 'pending'
  });
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      'Authorization': `Bearer ${AUTH}`,
      'Content-Type': 'application/json'
    };

    try {
      const response = await axios.post('https://crudapi.co.uk/api/v1/task', JSON.stringify([formData]), { headers });
      console.log('POST response:', response.data);
      // Handle successful response here
      setAlertMessage('Post successful');
      setFormData({
        taskname: '',
        name: '',
        surname: '',
        deadline: '',
        status: 'pending'
      });
    } catch (error) {
      console.error('Error:', error);
      setAlertMessage('Post failed');
    }
  };

  return (
    <div className="form-container">
      <h2>{translate('addTask')}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">{translate('taskName')}:</label>
          <input
            className="form-input"
            type="text"
            name="taskname"
            value={formData.taskname}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">{translate('userName')}:</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">{translate('userSurname')}:</label>
          <input
            className="form-input"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">{translate('taskDeadline')}:</label>
          <input
            className="form-input"
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>

        <button className="form-button" type="submit">{translate('submit')}</button>
        <br />
        <Link to="/">{translate('goBack')}</Link>
      </form>
      {alertMessage && <div>{alertMessage}</div>}
    </div>
  );
}

export default AddPage;
