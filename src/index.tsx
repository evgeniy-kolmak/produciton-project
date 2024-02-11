import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import { AppRouter } from './app/providers/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<AppRouter />);
