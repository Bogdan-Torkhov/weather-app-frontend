import ReactDOM from 'react-dom/client';
import { Router } from './Router/appRouter';
import { BrowserRouter } from 'react-router-dom';
import { ResetStyles } from 'components/stylesReset'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ResetStyles />
    <Router />
  </BrowserRouter>
);
