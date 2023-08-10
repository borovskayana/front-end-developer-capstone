import {
  Route, 
  Routes
} from 'react-router-dom';



import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import HomePage from "./pages/HomePage";
import { fetchAPI, submitAPI } from './utils/api';
import "./css/mystyle.css"


import { useReducer } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
};



const App = () => {
  const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const [
  availableTimes, 
  dispatchOnDateChange
] = useReducer(updateTimes, [], initializeTimes);
const navigate = useNavigate();
const [formData, setFormData] = useState({})
const submitData = (formData) => {
  const response = submitAPI(formData);
  if (response) navigate('/confirmedBooking');
  setFormData(formData)
  }; 



  return (
    <>

        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path='/bookings/' element={<BookingPage availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} />} />
          <Route 
            path='/confirmedBooking' 
            element={<ConfirmationPage {...formData} />} 
          />
 
        </Routes>

    </>
  );
};

export default App;
