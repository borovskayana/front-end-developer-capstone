import "../css/Main.css";
import marioA from "../img/MarioandAdrianA.jpg";
import marioB from "../img/MarioandAdrianb.jpg";

function Chicago() {
  return (
    <div className="chicago">
      <div>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist. <br /> Family restaurants are casual
          eating establishments originally designed for families, but now
          enjoyed by a wide range of customers.
        </p>
      </div>
      <div className="chicago-img">
        <img src={marioA} className="chicago-img-A" />
        <img src={marioB} className="chicago-img-B" />
      </div>
    </div>
  );
}
export default Chicago;
