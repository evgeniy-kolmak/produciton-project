import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import useTheme from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/helpers/classNames";

export function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Suspense fallback={"Loading..."}>
        <Outlet />
      </Suspense>
      <button onClick={toggleTheme}>Изменить тему</button>
    </div>
  );
}
