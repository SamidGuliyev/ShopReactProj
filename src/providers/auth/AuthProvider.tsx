import { createContext, useReducer, type PropsWithChildren } from "react";
import type { User } from "./auth.types";
import { handleLogin } from "./auth.services";
import { useCookies } from "react-cookie";

interface AuthContextType {
  user: User;
  isAuthenticated: boolean;
  error: string | null;
  setCookies: (credentials: string) => void,
}

const AuthContext = createContext<AuthContextType>({
  user: {} as User,
  isAuthenticated: false,
  error: null,
  setCookies: () => {},
});

async function reducer(
  state: AuthContextType,
  { type, payload }: { type: string; payload?: any },
): Promise<AuthContextType> {
  if (type === "LOGIN" && payload) {
    handleLogin(
      payload as { email: string; password: string },
    )
    .then(credentials => {
        state.setCookies(JSON.stringify(credentials));
    })
    .catch();
  }
}

export default function AuthProvider(props: PropsWithChildren) {
  const [cookies, setCookies] = useCookies(["credentials"]);
  const [state, dispatch] = useReducer(reducer, {
    user: {} as User,
    isAuthenticated: false,
    error: null,
    setCookies: (credentials: string) => setCookies("credentials", credentials, { path: "/" }),
  });

  return <AuthContext value={{}}>{props.children}</AuthContext>;
}
