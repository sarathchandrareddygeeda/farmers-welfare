import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import "../styles/Navbar.css"; // Import custom CSS
import { UserContext } from "./context/UserContext"; // Import UserContext
import { useSelector } from "react-redux";
import { store } from "../redux/store";
import { useDispatch } from "react-redux";
import { revertUser } from "../redux/Silce/userSlice";
import Cookies from "js-cookie"; // Import js-cookie to read cookies

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(UserContext); // Access user and setUser from context
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();

  const newUser = useSelector((store) => store.user);

  // Check if a token exists in cookies
  const token = Cookies.get("token"); // Adjust 'token' to the actual cookie name you are using

  useEffect(() => {
    // Log whenever the `user` context updates to confirm reactivity
    console.log("Navbar detected user change:", newUser);
  }, [newUser]);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3001/api/logout", {
        // Add a logout route in the backend
        method: "POST",
        credentials: "include",
      });
      setUser(null); // Clear user state
      dispatch(revertUser());
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-brand">MyApp</h1>
        <button className="toggle-button" onClick={toggleNavbar}>
          ☰ {/* Unicode character for hamburger icon */}
        </button>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>

          {/* Conditionally render Add Report link */}
          {(newUser || token) && (
            <>
              <Link to="/add-report" className="nav-link">
                Add Report
              </Link>
              <Link to="/details" className="nav-link">
                Details
              </Link>
            </>
          )}

          {!newUser ? (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          ) : (
            <button onClick={handleLogout} className="nav-link">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
