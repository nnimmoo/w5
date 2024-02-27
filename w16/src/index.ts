import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import { LanguageProvider } from './LanguageContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <Header />
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
