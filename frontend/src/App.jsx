import { AppShell } from '@mantine/core';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar'; // Путь к новому файлу

export default function App() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 280, breakpoint: 'sm' }}
      padding="md"
    >
      {/* Шапка сайта */}
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      {/* Боковое меню */}
      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>

      {/* Главный контент сайта */}
      <AppShell.Main bg="#ffffff">
        Привет! Здесь будет основной контент твоего «Нашего формата»...
      </AppShell.Main>
    </AppShell>
  );
}