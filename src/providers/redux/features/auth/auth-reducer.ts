import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, Credentials, CredentialsToken, LoginUser } from "../../../../types/auth/auth.types";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


export  function loginMethod(state: AuthState, action : PayloadAction<LoginUser>) {
    const { type, payload } = action;
    if(type === "LOGIN" && payload) {
        const { email, password, setCookie } = payload;
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

        setCookie("credentials", JSON.stringify(credentials));

        console.log(obj);

        state.user = obj.user;
        state.isAuthenticated = obj.isAuthenticated;
        state.error = obj.error;
        }).catch(error => {
            console.error("Login error:", error);
             state.error = "Login failed. Please check your credentials and try again.";
        });

       

    }
}