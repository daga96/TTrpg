import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


export default function Navbar() {

    return (
        <nav className="NavbarItems" id="navbar-items">   
        
          <Link to="/" ><span className="navbar-logo"><img src="/logo.svg" alt="nat1 dice logo" className="logo"></img><h1 className="web-name">TTrpg</h1></span></Link>
          <Link to="/signin" className="nav-links" >Sign In</Link>

        </nav>
            )
}