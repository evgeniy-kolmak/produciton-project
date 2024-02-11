import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <ThemeProvider>
          <App />
        </ThemeProvider>
      }
    >
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Route>
  )
);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
