import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import { AppRouter } from './app/providers/router';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StoreProvider>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </StoreProvider>
);
