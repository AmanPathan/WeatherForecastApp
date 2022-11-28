import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <div className="list">
        <div className="heading">
          <h1>Weather App</h1>
        </div>
        <div className='list_ul'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
