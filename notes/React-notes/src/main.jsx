import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Cria o root e renderiza a aplicação com React 19
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
