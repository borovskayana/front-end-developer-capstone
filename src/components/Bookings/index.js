
import table from "../../img/table.svg"
import tabletwo from "../../img/tablettwo.svg"
import lemon from "../../img/lemon.svg"


import BookingForm from './BookingForm';
import "../../css/BookingForm.css"



const Bookings = ({availableTimes, dispatchOnDateChange, submitData}) => {



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
