import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Signin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      navigation("/dashboard");
    } catch {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="signup-main">
      <div className="signup-wrapper">
        <div className="signup-left">
          <h3> Sign In</h3>
          <p>Welcome back adventurer!</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="email"
              name="email"
              ref={emailRef}
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
            {error}

            <button className="signin-button" type="submit" disabled={loading}>
              Sign In
            </button>
            <span className="account-alert">
              Don't have an account?{" "}
              <Link to="/signup" className="sign-link">
                Sign up
              </Link>
            </span>
            <span className="forgot-password">Forgot a password?</span>
          </form>
        </div>

        <div className="signup-right"></div>
      </div>
    </div>
  );
}
