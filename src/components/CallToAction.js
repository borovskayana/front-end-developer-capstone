import "../css/Main.css";
import food from "../img/restauranfood.jpg";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <div className="main-info">
      <div>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>
          <Link to="/booking" role="button">
            Reserve a table
          </Link>
        </button>
      </div>

      <img src={food} />
    </div>
  );
}
export default CallToAction;
