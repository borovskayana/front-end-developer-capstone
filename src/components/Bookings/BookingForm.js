import { useState } from "react";
import "../../css/BookingForm.css";
import { useNavigate } from "react-router-dom";

const GuestsErrorMessage = () => {
  return (
    <p className="field-error">
      Tables cannot be reserved for less than one person
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

  const navigate = useNavigate();

  const getIsFormValid = () => {
    return resDate && resTime && guests.value > 0;
  };

  const handleDateChange = (e) => {
    setResDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = (e) => setResTime(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();


    if (guests.value < 1) return;

    const formData = {
      resTime,
      resDate,
      guests: guests.value,
      occasion,
    };

    if (formData) {
      submitData(formData);
      navigate("/confirmedBooking");
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="booking-form">
        <div className="Field">
          <label htmlFor="booking-date" className="labelField">
            Choose date<sup>*</sup>
          </label>
          <input
            type="date"
            id="booking-date"
            name="booking-date"
            className="inputField"
            min={resDateValue}
            value={resDate}
            required={true}
            onChange={handleDateChange}
          />
        </div>
        <div className="Field">
          <label htmlFor="booking-time" className="labelField">
            Choose time <sup>*</sup>
          </label>

          <select
            id="booking-time"
            name="booking-time"
            className="inputField"
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
          <label htmlFor="booking-guests" className="labelField">
            Number of guests <sup>*</sup>
          </label>
          <input
            value={guests.value}
            type="number"
            id="booking-guests"
            className="inputField"
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
          {guests.isTouched && guests.value < 1 ? <GuestsErrorMessage /> : null}
        </div>
        <div className="Field">
          <label htmlFor="booking-occasion" className="labelField">
            Occasion
          </label>
          <select
            id="booking-occasion"
            name="booking-occasion"
            className="inputField"
            value={occasion}
            required={true}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <input
          className="inputSubmit"
          type="submit"
          role="button"
          value="Make Your reservation"
          disabled={!getIsFormValid()}
        />
      </form>
    </>
  );
};

export default BookingForm;
