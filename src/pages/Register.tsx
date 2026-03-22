import { Link } from "react-router";
import "./auth.css";
import { useLayoutEffect, useState } from "react";
import { useAuth } from "../providers/auth/AuthProvider";


export default function RegisterPage() {

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repassword: "",
  });

  const registerHandler = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const { dispatch, isAuthenticated } = useAuth();


  useLayoutEffect(() => {
    if (isAuthenticated) window.location.href = "/";
  }, [isAuthenticated]);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              First name
            </label>
            <input
              type="text"
              id="name"
              name="firstName"
              className="form-input"
              placeholder="Enter your first name"
              onChange={registerHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Last name
            </label>
            <input
              type="text"
              id="name"
              name="lastName"
              className="form-input"
              placeholder="Enter your last name"
              onChange={registerHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              onChange={registerHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Create a password"
              onChange={registerHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="repassword"
              className="form-input"
              placeholder="Confirm your password"
              onChange={registerHandler}
            />
          </div>
          <button type="submit"
            onClick={async (e) => {
              e.preventDefault();
              dispatch({ type: "REGISTER", payload: registerData });
            }}
            className="auth-button">
            Sign Up
          </button>
        </form>
        <div className="auth-footer">
          Already have an account?
          <Link to="/login" className="auth-link">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
