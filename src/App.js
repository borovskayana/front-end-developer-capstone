import {
  Route, 
  Routes
} from 'react-router-dom';



import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>

        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path='/bookings' element={<BookingPage />} />
          <Route 
            path='/confirmedBooking' 
            element={<ConfirmationPage />} 
          />
 
        </Routes>

    </>
  );
};

export default App;
