import axios from "axios";
import type { Credentials } from "./auth.types";

export async function handleLogin({ email, password }: {email: string, password: string}) {
  const _email = email.trim() === "";
  const _password = password.trim() === "";

  if (_email || _password)
    throw new Error("Email or Password cannot be empty!");

  try {
    const credentials = (
      await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      })
    ).data as Credentials;

    // if (credentials.token)
    //   setCookies("credentials", JSON.stringify(credentials), { path: "/" });
    return credentials;
  } catch {
    throw new Error("An error occurred!");
  }
}
