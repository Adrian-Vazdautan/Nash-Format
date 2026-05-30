import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

// Импортируем файлы, которые лежат в корне src/pages/
import { AuthPage } from './pages/AuthPage/';
import { FeedPage } from './pages/Feed/';
import { RegisterPage } from './pages/Registration/';
import { RecoveryPage } from './pages/Recovery/';
import { EditorPage } from './pages/Editor/';
import { ProfilePage } from './pages/Profile/';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Полноэкранные страницы */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recovery" element={<RecoveryPage />} />

        {/* 2. Страницы внутри общей раскладки (с шапкой и сайдбаром) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/feed" replace />} />
          <Route path="feed" element={<FeedPage />} />
          <Route path="editor" element={<EditorPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        {/* 3. Хэндлер для кривых ссылок */}
        <Route path="*" element={<Navigate to="/feed" replace />} />
      </Routes>
    </BrowserRouter>
  );
}