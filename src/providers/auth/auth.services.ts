import axios from "axios";
import type { Credentials, RegisterData } from "./auth.types";



export async function handleRegister(data: RegisterData) {

  const _email = data.email.trim() === "";
  const _password = data.password.trim() === "";
  const _repassword = data.repassword.trim() === "";
  const _firstName = data.firstName.trim() === "";
  const _lastName = data.lastName.trim() === "";

  if (_email || _password || _repassword || _firstName || _lastName)
    throw new Error("All fields are required!");
  if (data.password !== data.repassword)
    throw new Error("Passwords do not match!");

  try {
    await axios.post("https://localhost:7000/api/register", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      repassword: data.repassword,
    });
  } catch {
    throw new Error("An error occurred during registration!");
  }


}


export async function handleLogin({ email, password }: { email: string, password: string }) {
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
    // console.log(credentials);

  

    // if (credentials.token)
    //   setCookies("credentials", JSON.stringify(credentials), { path: "/" });
    return credentials;
  } catch {
    throw new Error("An error occurred!");
  }
}
