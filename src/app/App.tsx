import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import useTheme from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/helpers/classNames";
import { Navbar } from "widgets/Navbar";

export function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", [theme])}>
      <Navbar />
      <Suspense fallback={"Loading..."}>
        <Outlet />
      </Suspense>
      <button onClick={toggleTheme}>Изменить тему</button>
    </div>
  );
}
