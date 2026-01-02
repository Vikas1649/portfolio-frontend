import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 900,
  easing: "ease-out-cubic",
  once: true,
});

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(<App />);
