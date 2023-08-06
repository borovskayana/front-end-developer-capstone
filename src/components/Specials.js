import "../css/Main.css";
import dessert from "../img/lemondessert.svg";
import salad from "../img/greeksalad.svg";
import bruchetta from "../img/bruchetta.svg";
import group from "../img/group.svg";

function Specials() {
  return (
    <div className="specials">
      <div className="online-menu-button">
        <h2>This week specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials-info">
        <div className="specials-general">
          <img src={salad} className="specials-img" />

          <h6>Greek salad</h6>
          <span>$12.99</span>

          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
          <button>
            Order a delivery <img src={group} className="group_img" />
          </button>
        </div>
        <div className="specials-general">
          <img src={bruchetta} className="specials-img" />

          <h6>Bruchetta</h6>
          <span>$5.99</span>

          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.{" "}
          </p>
          <button>
            Order a delivery <img src={group} className="group_img" />
          </button>
        </div>
        <div className="specials-general">
          <img src={dessert} className="specials-img" />

          <h6>Lemon Dessert</h6>
          <span>$5.00</span>

          <p>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.{" "}
          </p>
          <button>
            Order a delivery <img src={group} className="group_img" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Specials;
