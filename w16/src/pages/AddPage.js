import React, { useState } from 'react';
import axios from 'axios';
import { AUTH } from '../api/api';
function AddPage(props) {
  const [formData, setFormData] = useState({
    taskname: '',
    name: '',
    surname: '',
    deadline: '',
    // status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    
    const headers = {
      'Authorization': `Bearer ${AUTH}`,
      'Content-Type': 'application/json' // Assuming JSON data is being sent
    };

    try {
      const response = await axios.post('https://crudapi.co.uk/api/v1/task', JSON.stringify([formData]), { headers });
      console.log('POST response:', response.data);
      // Handle successful response here
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <h2>Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" name="taskname" value={formData.taskname} onChange={handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Surname:
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
        </label>
        <br />
        <label>
          Deadline:
          <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
        </label>
        <br />
        {/* <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label> */}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPage;
