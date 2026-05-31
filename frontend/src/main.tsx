import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Импортируем наш настроенный App
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'; // Не забываем про стили Mantine
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>
);