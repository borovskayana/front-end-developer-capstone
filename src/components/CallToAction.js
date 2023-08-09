import "../css/Main.css";
import food from "../img/restauranfood.jpg";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <div className="main-info">

        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>
          <Link to="/bookings" role="button">
            Reserve a table
          </Link>
        </button>
 
      <img src={food} />
    </div>
  );
}
export default CallToAction;
