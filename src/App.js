import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import HotelMap from './pages/HotelMap';
import EventsInfo from './pages/EventsInfo';
import CheckInInfo from './pages/CheckInInfo';
import AmenitiesInfo from './pages/AmenitiesInfo';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing/>} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/property_map" element={<HotelMap/>} />
          <Route path="/events_info" element={<EventsInfo/>} />
          <Route path="/checkInOut" element={<CheckInInfo/>} />
          <Route path="/amenities" element={<AmenitiesInfo/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
