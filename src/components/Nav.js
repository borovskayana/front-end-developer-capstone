import "../css/Nav.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Nav() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="nav">
        <button className="humburger" onClick={handleToggle}>
          <div className={isActive ? "bar1" : "change_bar1"}></div>
          <div className={isActive ? "bar2" : "change_bar2"}></div>
          <div className={isActive ? "bar3" : "change_bar3"}></div>
        </button>
        <div className={isActive ? "display" : "display_block"}>
        <ul>

<li>
            <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
              </li>

            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                About
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Menu
              </a>
            </li>
            <li>
              <Link to="/bookings" style={{ textDecoration: "none" }}>
                Reservations
              </Link>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Order online
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Login
              </a>
            </li>
          </ul>
      </div>
</div>

    </>
  );
}
export default Nav;
