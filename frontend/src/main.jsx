import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Импортируем наш настроенный App
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'; // Не забываем про стили Mantine

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);