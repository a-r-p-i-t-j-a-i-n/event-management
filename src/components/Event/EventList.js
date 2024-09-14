import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../utils/eventApi';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getAllEvents();
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <a href={`/events/${event._id}`}>{event.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
