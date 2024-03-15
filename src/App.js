import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import HotelMap from './pages/HotelMap';
import EventsInfo from './pages/EventsInfo';
import CheckInInfo from './pages/CheckInInfo';
import AmenitiesInfo from './pages/AmenitiesInfo';
import Landing from './pages/Landing';
import LoginPage from './components/admin portal/LoginPage';
import ProtectedRoute from './components/protectected route/ProtectedRoute';
import AdminPortal from './components/admin portal/AdminPortal';

function App() {
  const [isAuthenticated, setState] = React.useState(true);
  const login = () => {
    setState(true);
  };

  const logout = () => {
    setState(false);
  };

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing/>} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/property_map" element={<HotelMap/>} />
          <Route path="/events_info" element={<EventsInfo/>} />
          <Route path="/checkInOut" element={<CheckInInfo/>} />
          <Route path="/amenities" element={<AmenitiesInfo/>} />
          <Route path="/login" element={<LoginPage setState={setState} />}/>
          {isAuthenticated ? (
            <Route path="/admin_portal" element={<AdminPortal/>} />
          ) : null}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
