import { Button, Avatar, Menu, Indicator, ActionIcon, Popover, Text } from '@mantine/core';
import { IconBell, IconPlus } from '@tabler/icons-react'; // Убедись, что установлена библиотека иконок

export function UserActions() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      
      {/* 1. Кнопка Добавить статью */}
      <Button leftSection={<IconPlus size={16} />} variant="filled" color="blue" radius="xl">
        Add new article
      </Button>

      {/* 2. Круглый аватар с меню */}
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Avatar src="/path-to-avatar.jpg" radius="xl" style={{ cursor: 'pointer' }} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Профиль</Menu.Item>
          <Menu.Item>Настройки</Menu.Item>
          <Menu.Divider />
          <Menu.Item color="red">Выйти</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      {/* 3. Кнопка уведомлений с окошком */}
      <Popover width={200} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <ActionIcon variant="transparent" color="white">
            <Indicator color="red" size={8} processing>
              <IconBell size={24} />
            </Indicator>
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="sm">Уведомлений пока нет</Text>
        </Popover.Dropdown>
      </Popover>
      
    </div>
  );
}