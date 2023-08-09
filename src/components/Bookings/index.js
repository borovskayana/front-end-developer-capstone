import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import table from "../../img/table.svg"
import tabletwo from "../../img/tablettwo.svg"
import lemon from "../../img/lemon.svg"
import { fetchAPI, submitAPI } from '../../utils/fakeAPI';

import BookingForm from './BookingForm';
import "../../css/BookingForm.css"

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
};

const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings = () => {
  const [
    availableTimes, 
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate('/confirmedBooking');
  }; 

  return (
    <div className="main">
      <div className='headForm'>
        <h2>Table reservation</h2>
        <img src={lemon} className="lemonImg" />
        </div>

      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      
      />
      <div className="bookingImg">
      <img src={table} className="tableImg" />
        <img src={tabletwo} className="tableImg" />
        </div>
    </div>
  );
};

export default Bookings;
