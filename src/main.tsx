import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./providers/redux(unused)/store.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
