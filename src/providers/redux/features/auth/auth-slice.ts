import { createSlice } from "@reduxjs/toolkit";
import type { AuthState, CredentialsToken, User } from "../../../../types/auth/auth.types";
import { loginMethod } from "./auth-reducer";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";


const sessionCookie = Cookies.get("credentials");
const user = {} as User;
if (sessionCookie) {
    const decoded = jwtDecode(sessionCookie) as CredentialsToken;
    user.id = decoded.sub;
    user.email = decoded.email;
    user.fullname = decoded.name;
    user.role = decoded.role;
}

const initialState: AuthState = {
    user: user,
    isAuthenticated: !!sessionCookie,
    error: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login :  loginMethod
    }
});

export const { login } = authSlice.actions;