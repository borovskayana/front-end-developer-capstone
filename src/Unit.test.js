import { render, screen } from "@testing-library/react";
import ConfirmedBooking from "./components/Bookings/ConfirmedBooking"



test('Renders the BookingForm heading', () => {
  render(<ConfirmedBooking />);
  const headingElement = screen.getByText("Your reservation has been confirmed!");
  expect(headingElement).toBeInTheDocument();
  const dateElement = screen.getByText("Date:");
  expect(dateElement).toBeInTheDocument();
  const timeElement = screen.getByText("Time:");
  expect(timeElement).toBeInTheDocument(); 

})