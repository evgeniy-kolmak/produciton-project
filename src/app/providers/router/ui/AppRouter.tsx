import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { App } from 'app/App';
import { ErrorBoundary } from 'widgets/ErrorBoundary';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<ErrorBoundary />}>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Route>
  )
);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
