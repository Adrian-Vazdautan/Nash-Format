import { Group, TextInput, Button, UnstyledButton, Menu, rem, Box, ActionIcon, Indicator } from '@mantine/core';
import { IconSearch, IconChevronDown, IconBell } from '@tabler/icons-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserActions } from './UserActions';
import { useState } from 'react';
import './MobileHeader.css';

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [value, setValue] = useState('');

  const handleSearch = () => {
    if (value.trim()) navigate(`/search?q=${value}`);
  };

  return (
    <Box className="header-box" 
      h={70} 
      px="xl" 
      bg="rgba(255, 255, 255, 0.8)" 
      style={{ 
        backdropFilter: 'blur(20px)',
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}
    >
      {/* Лого */}
      <Group component={Link} to="/feed" style={{ textDecoration: 'none' }}>
        <span style={{ color: '#000', fontWeight: 900, fontSize: '1.4rem', letterSpacing: '-1px' }}>
          НАШ.ФОРМАТ
        </span>
      </Group>

      {/* Центр: Поиск */}
      <TextInput
        placeholder="Поиск..."
        radius="lg"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        w={300}
        rightSection={
          <ActionIcon variant="subtle" color="gray" onClick={handleSearch}>
            <IconSearch size={16} />
          </ActionIcon>
        }
        styles={{
          input: { backgroundColor: '#f1f3f5', border: 'none' }
        }}
      />

      {/* Правая часть: Уведомления + Действия */}
      <Group gap="sm">

        {isAuthenticated ? (
          <UserActions />
        ) : (
          <Group gap="xs">
            <Menu shadow="md" radius="lg">
              <Menu.Target>
                <UnstyledButton style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600, fontSize: '0.9rem', paddingRight: '10px' }}>
                  EN <IconChevronDown size={14} />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>English</Menu.Item>
                <Menu.Item>Русский</Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Button variant="subtle" c="black" radius="lg" component={Link} to="/auth">Войти</Button>
            <Button variant="filled" bg="black" radius="lg" component={Link} to="/register">Регистрация</Button>
          </Group>
        )}
        {isAuthenticated && (
          <Indicator color="red" size={8} offset={6} processing>
            <ActionIcon variant="subtle" color="gray" radius="lg" size="lg">
              <IconBell size={20} />
            </ActionIcon>
          </Indicator>
        )}
      </Group>
    </Box>
  );
}