import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { App } from "./components/App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { MainAsync } from "./pages/Main/Main.async";
import { AboutAsync } from "./pages/About/About.async";
import ThemeProvider from "./theme/ThemeProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <ThemeProvider>
          <App />
        </ThemeProvider>
      }
    >
      <Route path="/" element={<MainAsync />} />
      <Route path="/about" element={<AboutAsync />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
