import React, { useState } from 'react';
import { createEvent } from '../../utils/eventApi'; // Import the function from eventApi.js

const CreateEvent = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent({ name, description, date, location })
      .then(response => alert('Event created!'))
      .catch(error => console.error('Error creating event:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateEvent;
