import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Profile</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
    title: "Portfolio",
    icon: "fas fa-address-card"
  };
  
  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

export default Navbar;
