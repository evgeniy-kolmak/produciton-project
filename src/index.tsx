import ReactDOM from "react-dom/client";
import "./app/styles/index.scss";
import { App } from "./app/App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "pages/MainPage/ui/Main";
import About from "pages/AboutPage/ui/About";
import { ThemeProvider } from "./app/providers/ThemeProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <ThemeProvider>
          <App />
        </ThemeProvider>
      }
    >
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
