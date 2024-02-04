import { RouteProps } from "react-router-dom";
import { About } from "pages/AboutPage";
import { Main } from "pages/MainPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const routePath: Record<AppRoutes, string> = {
  main: "/",
  about: "about",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  main: { path: routePath.main, element: <Main /> },
  about: { path: routePath.about, element: <About /> },
};
