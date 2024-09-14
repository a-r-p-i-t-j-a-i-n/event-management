import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import EventList from './EventList';
import CreateEvent from './CreateEvent';
import EventDetails from './EventDetails';
import EditEvent from './EditEvent';
import Reminder from './Reminder';

const EventPage = () => {
  return (
    <div className="event-page">
      <h1>Event Management</h1>
      <div className="event-actions">
        <Link to="/create" className="btn">Create Event</Link>
        <Link to="/" className="btn">Show Events</Link>
      </div>

      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/:id" element={<EventDetails />} />
        <Route path="/edit/:id" element={<EditEvent />} />
        <Route path="/reminder/:id" element={<Reminder />} />
      </Routes>
    </div>
  );
};

export default EventPage;
