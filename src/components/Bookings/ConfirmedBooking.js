import "../../css/BookingForm.css"
import success from "../../img/success.svg"
const ConfirmedBooking = ({ resTime, resDate, guests, occasion }) => {
  return (
    <div className="container confirmed-booking main">

      <h2>Your reservation has been confirmed!</h2>
      <img src={success} />
      <p>You will receive an email with all the details.</p>
 
<div className="confirmedInfo">
              <h4>Time: {resTime}</h4>
              <h4>Date: {resDate}</h4>
              <h4>Guests: {guests}</h4>
      <h4>Occasion: {occasion}</h4>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
