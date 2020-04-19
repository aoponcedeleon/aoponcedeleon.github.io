import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import "./App.css";
import {
  Text
} from 'rebass';
const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar bg-dark'>
      <Text className='lead'>
        <i className={icon} /> {title}
      </Text>
      
      <ul>
        <Link
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            offset={-120}
            duration= {500}
            className="clickable "
        >Profile</Link>
        <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-62}
            duration= {500}
            className="clickable"
        >About</Link>
        <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-62}
            duration= {500}
            className="clickable"
        >Education</Link>
        <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-62}
            duration= {500}
            className="clickable"
        >Skills</Link>
        <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-62}
            duration= {500}
            className="clickable"
        >Projects</Link>
      </ul>
    </div>
  );
}

Navbar.defaultProps = {
    title: "Online Portfolio",
    icon: "fas fa-address-card"
  };
  
  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

export default Navbar;
