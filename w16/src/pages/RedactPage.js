import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { AUTH } from '../api/api';
import { useLanguage } from '../LanguageContext';
import '../App.css';

function RedactPage() {
  const { id } = useParams();
  const { translate } = useLanguage();

  const [item, setItem] = useState({});
  const [formData, setFormData] = useState({});
  const [changed, setChanged] = useState(false); // State to track if form data has changed
  const headers = {
    'Authorization': `Bearer ${AUTH}`,
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://crudapi.co.uk/api/v1/task/${id}`, { headers });
        setItem(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setChanged(true); // Set changed state to true when a change occurs
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`https://crudapi.co.uk/api/v1/task/${id}`, formData, { headers });
      console.log('PUT response:', response.data);
      setChanged(false); // Reset changed state to false after successful submission
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>{translate('editTask')}</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">{translate('taskName')}</label>
          <input
            className="form-input"
            type="text"
            name="taskname"
            value={formData.taskname || ''}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">{translate('userName')}</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">{translate('userSurname')}</label>
          <input
            className="form-input"
            type="text"
            name="surname"
            value={formData.surname || ''}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">{translate('taskDeadline')}</label>
          <input
            className="form-input"
            type="date"
            name="deadline"
            value={formData.deadline || ''}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">{translate('taskStatus')}</label>
          <select
            className="form-input"
            name="status"
            value={formData.status || ''}
            onChange={handleChange}
          >
            <option value="pending">{translate('pending')}</option>
            <option value="in-progress">{translate('inProgress')}</option>
            <option value="completed">{translate('completed')}</option>
          </select>
        </div>

        <button className="form-button" type="submit">
          {translate('save')}
        </button>
        <br />
        <Link to="/">{translate('goBack')}</Link>
      </form>
      {changed && <div>Form data has changed</div>} 
    </div>
  );
}

export default RedactPage;
