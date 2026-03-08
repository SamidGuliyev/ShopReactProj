import {
  createContext,
  useContext,
  useReducer,
  type PropsWithChildren,
} from "react";
import type { CredentialsToken, User } from "./auth.types";
import { handleLogin } from "./auth.services";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  user: User;
  isAuthenticated: boolean;
  error: string | null;
  setCookies: (credentials: string) => void;
  dispatch: React.ActionDispatch<[{ type: string; payload?: any }]>;
}

const AuthContext = createContext<AuthContextType>({
  user: {} as User,
  isAuthenticated: false,
  error: null,
  setCookies: () => {},
  dispatch: () => {},
});

export const useAuth = () => useContext(AuthContext);

function reducer(
  state: Omit<AuthContextType, "dispatch">,
  { type, payload }: { type: string; payload?: any },
): Omit<AuthContextType, "dispatch"> {
  if (type === "LOGIN" && payload) {
    handleLogin(payload as { email: string; password: string })
      .then((credentials) => {
        state.setCookies(JSON.stringify(credentials));
        const decoded = jwtDecode(credentials.token) as CredentialsToken;
        return {
          ...state,
          user: {
            id: decoded.sub,
            email: decoded.email,
            fullname: decoded.name,
            role: decoded.role,
          },
          isAuthenticated: true,
          error: null,
        };
      })
      .catch((error) => {
        return {
          ...state,
          error: error.message || "An error occurred during login.",
        };
      });
  }
  return state;
}

export default function AuthProvider(props: PropsWithChildren) {
  const [cookies, setCookies] = useCookies(["credentials"]);
  const decoded = cookies.credentials
    ? (jwtDecode(cookies.credentials.token) as CredentialsToken)
    : null;
  const user = {
    id: decoded?.sub,
    email: decoded?.email,
    fullname: decoded?.name,
    role: decoded?.role,
  } as User;

  const [state, dispatch] = useReducer(reducer, {
    user,
    isAuthenticated: !!user.id,
    error: null,
    setCookies: (credentials: string) =>
      setCookies("credentials", credentials, { path: "/" }),
  });

  console.log(state);
  

  return (
    <AuthContext value={{ ...state, dispatch }}>{props.children}</AuthContext>
  );
}
