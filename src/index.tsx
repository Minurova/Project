import { createRoot } from 'react-dom/client';

import { App } from './App';

import 'normalize.css';

const app = document.getElementById('app');

if (app) {
  const root = createRoot(app);

  root.render(<App />);
}


