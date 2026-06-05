import { Button, Avatar, Menu, Indicator, ActionIcon, Popover, Text } from '@mantine/core';
import { IconBell, IconPlus } from '@tabler/icons-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function UserActions() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();      // 1. Удаляем токен и обновляем стейт
    navigate('/'); // 2. Перекидываем на главную (или страницу авторизации)
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      
      {/* 1. Кнопка Добавить статью */}
      <Button leftSection={<IconPlus size={16} />} variant="filled" color="blue" radius="xl" component={Link} to="/editor">
        Add new article
      </Button>

      {/* 2. Круглый аватар с меню */}
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Avatar src="/path-to-avatar.jpg" radius="xl" style={{ cursor: 'pointer' }} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item component={Link} to="/profile">Профиль</Menu.Item>
          <Menu.Item>Настройки</Menu.Item>
          <Menu.Divider />
          <Menu.Item color="red" onClick={handleLogout}>Выйти</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      
      
    </div>
  );
}