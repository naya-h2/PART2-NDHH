import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </>
);
