import {
  Route, 
  Routes
} from 'react-router-dom';



import Bookings from './components/Bookings';
import ConfirmedBooking from './components/Bookings/ConfirmedBooking';
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>

        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route 
            path='/confirmedBooking' 
            element={<ConfirmedBooking />} 
          />
 
        </Routes>

    </>
  );
};

export default App;
