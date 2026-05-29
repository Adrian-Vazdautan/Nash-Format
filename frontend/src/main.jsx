import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. Обязательно импортируем стили на самом верху
import '@mantine/core/styles.css'; 

// 2. Импортируем сам провайдер
import { MantineProvider } from '@mantine/core';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Оборачиваем App в MantineProvider */}
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);