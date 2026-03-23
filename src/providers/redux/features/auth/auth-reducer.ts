import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, Credentials, CredentialsToken, LoginUser } from "../../../../types/auth/auth.types";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";


export function loginMethod(state: AuthState, action : PayloadAction<LoginUser>) {
    const { payload } = action;
    if(payload) {
        const { email, password } = payload;
        const postData = axios.post("api/auth/login", { email, password });

        postData.then(response => {
            const credentials = response.data as Credentials;
            const decodedToken = jwtDecode(credentials.token) as CredentialsToken;
          const obj = {
            ...state,
            user: {
                id: decodedToken.sub,
                email: decodedToken.email,
                fullname: decodedToken.name,
                role: decodedToken.role,
            }, 
            isAuthenticated: true,
            error: null,
        };

        Cookies.set("credentials", JSON.stringify(credentials));

        }).catch(error => {
            console.error("Login error:", error);
             state.error = "Login failed. Please check your credentials and try again.";
        });
    }
}