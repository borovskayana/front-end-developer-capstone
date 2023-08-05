import "../css/Main.css";
import ratingfive from "../img/rating5.svg";
import ratingfour from "../img/rating4.5.svg";
import userone from "../img/user_one.svg";
import usertwo from "../img/user_two.svg";
import userthree from "../img/user_three.svg";
import userfour from "../img/user_four.svg";

function CustumersSay() {
  return (
    <div className="testimonials-bg">
    <div className="testimonials">
      <div className="testimonials-info">
        <img src={ratingfive} className="rating" />
        <div className="user">
        <img src={userone} className="users" />
          <h4>John</h4>
          </div>
        <p>
          Came for lunch with my sister. We loved Little Lemon dishes which were
          amazing with lots of flavour.
        </p>
      </div>

      <div className="testimonials-info">
        <img src={ratingfive} className="rating" />
        <div className="user">
        <img src={userthree} className="users" />
          <h4>Richard</h4>
          </div>
        <p>
          The food was delicious, the service was excellent, and the atmosphere
          was warm and welcoming.
        </p>
      </div>
      <div className="testimonials-info">
        <img src={ratingfour} className="rating" />
        <div className="user">
        <img src={usertwo} className="users" />
          <h4>Megan</h4>
          </div>
        <p>
          I would rate The Little Lemon Restaurant 4.5 out of 5 stars. Its
          dining atmosphere, food and service quality are excellent. 
        </p>
      </div>
      <div className="testimonials-info">
        <img src={ratingfive} className="rating" />
        <div className="user">
        <img src={userfour} className="users" />
          <h4>Ashley</h4>
          </div>
        <p>
          I was really excited about visiting Little Lemon, and the mains were
          just fantastic.
        </p>
      </div>
      </div>
      </div>
  );
}
export default CustumersSay;
