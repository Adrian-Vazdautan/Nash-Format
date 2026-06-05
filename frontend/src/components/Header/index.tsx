import { Group, TextInput, Button, UnstyledButton, Menu, rem, ActionIcon } from '@mantine/core';
import { IconSearch, IconChevronDown } from '@tabler/icons-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserActions } from './UserActions';
import { useState } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [value, setValue] = useState(''); // Добавили состояние

  const handleSearch = () => {
    if (value.trim()) {
      navigate(`/search?q=${value}`);
    }
  };

  return (
    <Group 
      h={60} 
      px="md" 
      bg="#1a365d"
      justify="space-between" 
      wrap="nowrap"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
    >
      <Group gap="xs" wrap="nowrap" component={Link} to="/feed">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3b82f6" />
          <path d="M2 17L12 22V12L2 7V17Z" fill="#2563eb" />
          <path d="M22 17L12 22V12L22 7V17Z" fill="#1d4ed8" />
        </svg>
        
        <span style={{ color: '#ffffff', fontWeight: 700, fontSize: rem(20), fontFamily: 'sans-serif' }}>
          Наш формат
        </span>
      </Group>

      {/* Центр: Поиск */}
      <TextInput
        placeholder="Поиск"
        size="sm"
        radius="xl"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Поиск по нажатию Enter
        w={{ base: 200, sm: 400, md: 500 }}
        rightSection={
          <ActionIcon 
            variant="transparent" 
            component={Link} to="/search"
            style={{ width: '100%', height: '100%', cursor: 'pointer' }}
          >
            <IconSearch style={{ width: rem(16), height: rem(16), color: '#888' }} stroke={1.5} />
          </ActionIcon>
        }
        styles={{
          input: { backgroundColor: '#ffffff', border: 'none', paddingRight: rem(40) },
          section: { 
            borderLeft: '1px solid #e2e8f0', 
            height: '35px', 
            backgroundColor: '#f8fafc',
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '50%',
          }
        }}
      />

      {isAuthenticated ? (
        <UserActions/>
      ) : (
        <Group gap="xl" wrap="nowrap">
          <Menu shadow="md" width={120}>
            <Menu.Target>
              <UnstyledButton style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '4px', fontSize: rem(15) }}>
                <span>English</span>
                <IconChevronDown style={{ width: rem(14), height: rem(14) }} stroke={2} />
              </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>English</Menu.Item>
              <Menu.Item>Русский</Menu.Item>
              <Menu.Item>Українська</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Button 
            variant="outline" 
            color="white" 
            radius="xl"
            px="xl"
            styles={{
              root: {
                borderColor: '#ffffff',
                color: '#ffffff',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }
            }}
          component={Link} to="/auth">
            Заходи
          </Button>
        </Group>
      )}
    </Group>
  );
}