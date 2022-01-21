import React, { useEffect, useRef, useState } from "react";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();

  const { signup } = useAuth();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Failed to create new account");
    }
  }

  return (
    <div className="signup-main">
      <div className="signup-wrapper">
        <div className="signup-left">
          <h3> Create an Account </h3>
          <p>Welcome to TTrpg!</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="email" ref={emailRef} required />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              ref={usernameRef}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              ref={passwordRef}
              required
            />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              placeholder="confirm password"
              name="confirmpassword"
              ref={passwordConfirmRef}
              required
            />
            <button className="signin-button" type="submit" disabled={loading}>
              Sign Up
            </button>
            <span className="account-alert">
              Have an account?{" "}
              <Link to="/signin" className="sign-link">
                Sign in
              </Link>
            </span>
          </form>
        </div>

        <div className="signup-right"></div>
      </div>
    </div>
  );
}
