import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
 // Example component
import EventList from './components/Event/EventList'; // Example component
import Login from './components/Auth/Login';
import Register from './components/Auth/Ragister';
import EventPage from './components/Event/EventPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       
        <Route path="/events" element={<EventPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
