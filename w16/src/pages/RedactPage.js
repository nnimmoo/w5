import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook from React Router
import axios from 'axios';
import { AUTH } from '../api/api';
function RedactPage() {
  const { id } = useParams(); // Extract the ID parameter from the URL

  const [item, setItem] = useState({});
  const [formData, setFormData] = useState({}); // State to store form data
  const headers = {
    'Authorization': `Bearer ${AUTH}`,
  };
  useEffect(() => {
    // Fetch item data from API when component mounts
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`https://crudapi.co.uk/api/v1/task/${id}`, formData, {headers});
      console.log('PUT response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Edit</h1>

         <form onSubmit={handleSubmit}>
         <label>
           Task Name:
           <input type="text" name="taskname" value={formData.taskname || ''} onChange={handleChange} />
         </label>
         <br />
         <label>
           Name:
           <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
         </label>
         <br />
         <label>
           Surname:
           <input type="text" name="surname" value={formData.surname || ''} onChange={handleChange} />
         </label>
         <br />
         <label>
           Deadline:
           <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
         </label>
         <br />
         <label>
           Status:
           <select name="status" value={formData.status} onChange={handleChange}>
             <option value="pending">Pending</option>
             <option value="in-progress">In Progress</option>
             <option value="completed">Completed</option>
           </select>
         </label>
         <br />
         <button type="submit">Save</button>
       </form>
    </div>
  );
}

export default RedactPage;
