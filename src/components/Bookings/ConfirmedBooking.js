import "../../css/BookingForm.css"
import success from "../../img/success.svg"
const ConfirmedBooking = () => {
  return (
    <div className="container confirmed-booking main">

      <h2>Your reservation has been confirmed!</h2>
      <img src={success} />
      <p>You will receive an email with all the details.</p>
    </div>
  );
};

export default ConfirmedBooking;
