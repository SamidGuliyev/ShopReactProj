import { Link } from "react-router";
import "./auth.css";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { errorToast } from "./utils/toast.utils";
import { useAuth } from "../providers/auth/AuthProvider";

interface Credentials {
  token: string;
  expiration: Date;
}

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const {dispatch, isAuthenticated} = useAuth();

  if (isAuthenticated) {
    window.location.href = "/";
    return;
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>
        <form className="auth-form" /* onSubmit={(e) => e.preventDefault()} */>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={async (e) => {
              e.preventDefault();
              dispatch({type: "LOGIN", payload: {email, password}});
            }}
            type="submit"
            className="auth-button"
          >
            Sign In
          </button>
        </form>
        <div className="auth-footer">
          Don't have an account?
          <Link to="/register" className="auth-link">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
