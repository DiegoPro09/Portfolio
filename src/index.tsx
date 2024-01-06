import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './modules/app/App';
import { I18nextProvider } from 'react-i18next';
import i18next from './shared/config/i18next'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);