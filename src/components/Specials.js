import "../css/Main.css";
import dessert from "../img/lemondessert.jpg";
import salad from "../img/greeksalad.jpg";
import bruchetta from "../img/bruchetta.jpg";

function Specials() {
  return (
    <div className="specials">
      <div className="online-menu-button">
        <h2>This week specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials-info">
        <div className="specials-general">
          <img src={salad} />
          <div className="specials-maininfo">
            <div className="price">
              <h4>Greek salad</h4>
              <p>$12.99</p>
            </div>

            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
            <button>Order a delivery</button>
          </div>
        </div>

        <div className="specials-general">
          <img src={bruchetta} />
          <div className="specials-maininfo">
            {" "}
            <div className="price">
              <h4>Greek salad</h4>
              <p>$12.99</p>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
            <button>Order a delivery</button>
          </div>
        </div>
        <div className="specials-general">
          <img src={dessert} className="dessert" />
          <div className="specials-maininfo">
            <div className="price">
              <h4>Greek salad</h4>
              <p>$12.99</p>
            </div>

            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
            <button>Order a delivery</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Specials;
