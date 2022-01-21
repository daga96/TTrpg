import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { currentUser } = useAuth();
  const { signout } = useAuth();

  const handleLogout = async () => {
    try {
      await signout();
    } catch {
      console.log("error");
    }
  };

  return (
    <nav className="NavbarItems" id="navbar-items">
      <Link to="/">
        <span className="navbar-logo">
          <img src="/logo.svg" alt="nat1 dice logo" className="logo"></img>
          <h1 className="web-name">TTrpg</h1>
        </span>
      </Link>
      {currentUser ? (
        <Link to="/" className="nav-links" onClick={handleLogout}>
          Log Out
        </Link>
      ) : (
        <Link to="/signin" className="nav-links">
          Sign In
        </Link>
      )}
    </nav>
  );
}
