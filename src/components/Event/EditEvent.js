import React, { useState, useEffect } from 'react';
import { getEventDetails, updateEvent } from '../utils/eventApi';

const EditEvent = ({ match }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const eventId = match.params.id;

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getEventDetails(eventId);
        const event = response.data;
        setName(event.name);
        setDescription(event.description);
        setDate(event.date);
        setLocation(event.location);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEvent(eventId, { name, description, date, location });
      alert('Event updated!');
      window.location.href = '/events';
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div className="edit-event">
      <h2>Edit Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <button type="submit">Update Event</button>
      </form>
    </div>
  );
};

export default EditEvent;
