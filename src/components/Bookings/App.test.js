import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm"



test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Table reservation");
  expect(headingElement).toBeInTheDocument();
})