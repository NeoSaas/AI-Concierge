import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom';
import React, { useEffect, useCallback, useState, lazy, Suspense } from 'react';
import ProtectedRoute from './components/protectected route/ProtectedRoute';
import { AppProvider, useAppContext } from './AppContext';
import axios from 'axios';
import HotelMap from './pages/HotelMap';
import AmenitiesDining from './pages/amenities sub pages/AmenitiesDining';
import AmenitiesEventSpace from './pages/amenities sub pages/AmenitiesEventSpace';
import AmenitiesRooms from './pages/amenities sub pages/AmenitiesRooms';
import AmenitiesSpa from './pages/amenities sub pages/AmenitiesSpa';
import CheckInInfo from './pages/CheckInInfo';
import EventsInfo from './pages/EventsInfo';

const Home = lazy(() => import('./pages/Home'));
const Landing = lazy(() => import('./pages/Landing'));
const LoginPage = lazy(() => import('./components/admin portal/LoginPage'));
const AdminPortal = lazy(() => import('./components/admin portal/AdminPortal'));
const Signup = lazy(() => import('./components/admin portal/Signup'));

function App() {
  const { isAuthenticated, login, logout, setIsAuthenticated, setIsTimerComplete, isTimerComplete } = useAppContext();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      redirect('/login');
    }
  }, [setIsAuthenticated]);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsTimerComplete(true);
    }, 2 * 60 * 1000); // 2 minutes in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/property_map" element={<HotelMap />} />
          <Route path="/events_info" element={<EventsInfo />} />
          <Route path="/checkInOut" element={<CheckInInfo />} />
          <Route path="/spa" element={<AmenitiesSpa />} />
          <Route path="/dining" element={<AmenitiesDining />} />
          <Route path="/event_spaces" element={<AmenitiesEventSpace />} />
          <Route path="/rooms" element={<AmenitiesRooms />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/admin_portal" element={<ProtectedRoute user={isAuthenticated} redirect="/login"><AdminPortal /></ProtectedRoute>} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default function AppWrapper() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}