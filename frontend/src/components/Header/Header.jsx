import { Group, TextInput, Button, UnstyledButton, Menu, rem } from '@mantine/core';
import { IconSearch, IconChevronDown } from '@tabler/icons-react';

export default function Header() {
  return (
    <Group 
      h={60} 
      px="md" 
      bg="#1a365d" // Темно-синий цвет как на скриншоте
      justify="space-between" 
      wrap="nowrap"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
    >
      {/* Левая часть: Логотип и Название */}
      <Group gap="xs" wrap="nowrap">
        {/* Вместо этого SVG можно вставить твою иконку куба */}
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
        w={{ base: 200, sm: 400, md: 500 }} // Адаптивная ширина
        rightSection={
          <IconSearch style={{ width: rem(16), height: rem(16), color: '#888' }} stroke={1.5} />
        }
        styles={{
          input: {
            backgroundColor: '#ffffff',
            border: 'none',
            paddingRight: rem(40),
          },
          section: {
            // Делаем правую часть с лупой визуально отделенной (как на скрине)
            borderLeft: '1px solid #e2e8f0',
            height: '100%',
            paddingLeft: rem(10),
            backgroundColor: '#f8fafc',
            borderTopRightRadius: rem(32),
            borderBottomRightRadius: rem(32),
          }
        }}
      />

      {/* Правая часть: Выбор языка и кнопка Войти */}
      <Group gap="xl" wrap="nowrap">
        {/* Выпадающее меню для языка */}
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

        {/* Кнопка Заходи (Войти) */}
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
        >
          Заходи
        </Button>
      </Group>
    </Group>
  );
}