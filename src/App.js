import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import HotelMap from './pages/HotelMap';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/property_map" element={<HotelMap/>} />
          <Route path="/events_info" element={<HotelMap/>} />
          <Route path="/checkInOut" element={<HotelMap/>} />
          <Route path="/amenities" element={<HotelMap/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
