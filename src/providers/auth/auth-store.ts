import { create } from "zustand";
import type { AuthState, CredentialsToken, LoginUser, RegisterData, User } from "../../types/auth/auth.types";
import { handleLogin, handleRegister } from "./auth.services";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";



export const useAuth = create<AuthState>()((set) => {
    return {
        user: {} as User,
        isAuthenticated: false,
        error: null,
        login: async (inputs: LoginUser) => {
            try {
                const credentials = await handleLogin(inputs);
                Cookies.set("credentials", JSON.stringify(credentials), { expires: 7 });
                const decoded = jwtDecode(credentials.token) as CredentialsToken;

                set(state => {
                    return {
                        ...state,
                        user: {
                            id: decoded.sub,
                            fullname: decoded.name,
                            email: decoded.email,
                            role: decoded.role,
                        },
                        isAuthenticated: true,
                    }
                })
            } catch (error) {
                console.error(error);
            }
        },
        logout: () => {
            Cookies.remove("credentials");
            set(state => {
                return {
                    ...state,
                    user: {} as User,
                    isAuthenticated: false,
                }
            })
        },
        register: async (data : RegisterData) => {
            try{
                await handleRegister(data);
                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        }
    }
});