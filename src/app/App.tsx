import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import useTheme from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/helpers/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import "shared/config/i18n/i18n";

export function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <Suspense fallback={"Loading..."}>
          <div className="page-wrapper">
            <Outlet />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
