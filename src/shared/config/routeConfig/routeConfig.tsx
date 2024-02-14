import { RouteProps } from 'react-router-dom';
import { About } from 'pages/AboutPage';
import { Main } from 'pages/MainPage';
import { NotFound } from 'pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const routePath: Record<AppRoutes, string> = {
  main: '/',
  about: 'about',
  not_found: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  main: { path: routePath.main, element: <Main /> },
  about: { path: routePath.about, element: <About /> },
  not_found: { path: routePath.not_found, element: <NotFound /> },
};
