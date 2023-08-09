import { useState } from "react";

const GuestsErrorMessage = () => {
  return (
    <p className="field-error">
      Tables cannot be reserved for less than one person
    </p>
  );
};
const TimeErrorMessage = () => {
  return (
    <p className="field-error">
  Please choose time
    </p>
  );
};

const BookingForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {



  const resDateValue = new Date().toISOString().split("T")[0];
  const resTimeValue = availableTimes[0];



  const [resDate, setResDate] = useState(resDateValue);
  const [resTime, setResTime] = useState(resTimeValue);
  const [guests, setGuests] = useState({ 
    value: "", 
    isTouched: false, 
  }); 
  const [occasion, setOccasion] = useState("Birthday");



  const getIsFormValid = () => { 
    return ( 
      resDate && 
      resTime &&
  guests.value > 0


   
    ); 
   };

  const handleDateChange = (e) => {
    setResDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = (e) => setResTime(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitData({ resDate, resTime, guests, occasion });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="Field"> 
      <label> 
             Date<sup>*</sup> 
           </label> 
        <input
          type="date"
          id="booking-date"
          name="booking-date"
          min={resDateValue}
          value={resDate}
          required={true}
          onChange={handleDateChange}
        />
      </div>
      <div className="Field"> 
      <label> 
             Time <sup>*</sup> 
           </label> 
 
        <select
          id="booking-time"
          name="booking-time"
          value={resTime}
          required={true}
          onChange={handleTimeChange}
        >
          {availableTimes.map((times) => (
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          ))}
        </select>
      </div>
      <div className="Field"> 
           <label> 
             Guests <sup>*</sup> 
           </label> 
            <input
     value={guests.value} 
          type="number" 
          min="1"
          max="10"
             onChange={(e) => { 
               setGuests({ ...guests, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setGuests({ ...guests, isTouched: true }); 
             }} 
             placeholder="0" 
           /> 
           {guests.isTouched && guests.value < 1 ? ( 
             <GuestsErrorMessage /> 
           ) : null} 
         </div> 
      <div className="Field">
        
      <label> 
             Occasion 
           </label> 
        <select
          id="booking-occasion"
          name="booking-occasion"
          value={occasion}
          required={true}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>
      <button
        className="button-primary"
        type="submit"
        disabled={!getIsFormValid()}
      >
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
