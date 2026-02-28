import { Link } from "react-router";
import "./auth.css";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { errorToast } from "./utils/toast.utils";

interface Credentials {
  token: string;
  expiration: Date;
}

export default function LoginPage() {
  const [cookies, setCookies] = useCookies(["credentials"]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onLoginInputsHandle = async (email: string, password: string) => {
    const _email = email.trim() === "";
    const _password = password.trim() === "";

    if (_email || _password) {
      errorToast("Email or Password cannot be empty!");
    } else {
      try {
        // const data = (await axios.get("http://localhost:5000/users"))
        //   .data as User[];

        // if (data) {
        //   const user = data.find((u) => u.email === email.toLowerCase());
        //   if (!user || user.password !== password) {
        //     errorToast("Email or password is wrong!");
        //     return;
        //   }

        //   const token = "barselona1235";
        //   setCookies("token", token, { path: "/" });
        // }
        const credentials = (
          await axios.post("http://localhost:5000/api/login", {
            email,
            password,
          })
        ).data as Credentials;

        if (credentials.token)
          setCookies("credentials", JSON.stringify(credentials), { path: "/" });
      } catch {
        errorToast("An error occurred!");
      }
    }
  };

  if (cookies.credentials) {
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
              await onLoginInputsHandle(email, password);
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
