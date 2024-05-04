import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import React, { useEffect } from 'react';
import HotelMap from './pages/HotelMap';
import EventsInfo from './pages/EventsInfo';
import CheckInInfo from './pages/CheckInInfo';
import ProtectedRoute from './components/protectected route/ProtectedRoute';
import AmenitiesSpa from './pages/amenities sub pages/AmenitiesSpa';
import AmenitiesDining from './pages/amenities sub pages/AmenitiesDining';
import AmenitiesEventSpace from './pages/amenities sub pages/AmenitiesEventSpace';
import AmenitiesRooms from './pages/amenities sub pages/AmenitiesRooms';
import Landing from './pages/Landing';
import LoginPage from './components/admin portal/LoginPage';
import AdminPortal from './components/admin portal/AdminPortal';
import Signup from './components/admin portal/Signup';
import { redirect } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [isAuthenticated, setState] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);
  const [isHotelSpecific, setIsHotelSpecific] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false)

  const wrapPrivateRoute = (element, user, redirect) => {
    return (
      <ProtectedRoute user={user} redirect={redirect}>
        {element}
      </ProtectedRoute>
    );
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setState(true);
    }
    else {
      setState(false);
      redirect('/login');
    }
  }, [isAuthenticated]);

  const login = () => {
    setState(true);
  };

  const logout = () => {
    setState(false);
    redirect('/login');
  };

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing setIsHotelSpecific={setIsHotelSpecific} disabled={disabled}/>} />
          <Route path="/home" exact element={<Home setIsHotelSpecific={setIsHotelSpecific} isHotelSpecific={isHotelSpecific}/>} />
          <Route path="/property_map" element={<HotelMap/>} />
          <Route path="/events_info" element={<EventsInfo/>} />
          <Route path="/checkInOut" element={<CheckInInfo/>} />
          <Route path="/spa" element={<AmenitiesSpa/>} />
          <Route path="/dining" element={<AmenitiesDining/>} />
          <Route path="/event_spaces" element={<AmenitiesEventSpace/>} />
          <Route path="/rooms" element={<AmenitiesRooms/>} />
          <Route path="/login" element={<LoginPage login={login} setRememberMe={setRememberMe}/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/admin_portal" element={wrapPrivateRoute(<AdminPortal logout={logout}/>, isAuthenticated, '/login')} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
