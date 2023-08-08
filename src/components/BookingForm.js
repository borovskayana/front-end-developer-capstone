import "../css/BookingForm.css";

import { useState } from "react";
const GuestsErrorMessage = () => {
    return (
      <p className="field-error">
        Tables cannot be reserved for less than one person
      </p>
    );
  };
function BookingForm() {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("18:00");

  const [occasions, setOccasions] = useState("Birthday");
  const [guests, setGuests] = useState({ 
    value: "", 
    isTouched: false, 
  }); 



    const getIsFormValid = () => { 
        return ( 
          resDate && 
          resTime &&
          Number(guests.value) > 0

  
       
        ); 
       };
       const clearForm = () => { 
        setResDate(""); 
        setResTime("18:00"); 
setGuests({value: "", isTouched: false})
           setOccasions("Birthday"); 

 
      }; 
      
      const handleSubmit = (e) => { 
        e.preventDefault(); 
        alert("Account created!"); 
          clearForm(); 

      }; 
      

  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date <sup>*</sup> </label>
        <input type="date" id="res-date"  value={resDate} onChange={(e) => setResDate(e.target.value)}/>
        <label htmlFor="res-time">Choose time <sup>*</sup> </label>
        <select id="res-time" value={resTime} onChange={(e) => setResTime(e.target.value)}>
          <option>17:00</option>
          <option value="18:00">18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>

        <div className="Field"> 
           <label> 
             Guests <sup>*</sup> 
           </label> 
            <input
     value={guests.value} 
             type="number" 
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
         <label htmlFor="occasion">Occasion</label>
        <select id="occasions" value={occasions} onChange={(e) => setOccasions(e.target.value)}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        

              <input type="submit" value="Make Your reservation"  disabled={!getIsFormValid()}/>
     

      </form>
    </>
  );
}
export default BookingForm;
