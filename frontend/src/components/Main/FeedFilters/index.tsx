import { useState } from 'react';
import { Group, Button, Popover, Text, Stack, ActionIcon, rem } from '@mantine/core';
import { IconCalendarEvent, IconAdjustmentsHorizontal } from '@tabler/icons-react';

export function FeedFilters() {
  const [active, setActive] = useState('New'); // По умолчанию первая активна
  const [dateRange, setDateRange] = useState('Выбрать интервал');

  return (
    <Group gap="sm" my="xl">
      {/* Первая группа: New, The Best */}
      <Button 
        onClick={() => setActive('New')}
        variant={active === 'New' ? 'filled' : 'white'}
        color={active === 'New' ? 'white' : 'dark'}
        bg={active === 'New' ? 'dark' : 'white'}
        c={active === 'New' ? 'white' : 'black'}
        radius="xl" size="sm" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
      >New</Button>
      
      <Button 
        onClick={() => setActive('The Best')}
        variant={active === 'The Best' ? 'filled' : 'white'}
        bg={active === 'The Best' ? 'dark' : 'white'}
        c={active === 'The Best' ? 'white' : 'black'}
        radius="xl" size="sm" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
      >The Best</Button>

      {/* Вторая группа: 3-5 (первая активна) */}
      {['All time', 'Day', 'Week'].map((item) => (
        <Button 
          key={item}
          onClick={() => setActive(item)}
          variant={active === item ? 'filled' : 'white'}
          bg={active === item ? 'dark' : 'white'}
          c={active === item ? 'white' : 'black'}
          radius="xl" size="sm" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        >{item}</Button>
      ))}

      {/* 6 кнопка: Календарь */}
      <Popover width={200} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button variant="white" c="black" radius="xl" size="sm" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} leftSection={<IconCalendarEvent size={16}/>}>
            {dateRange}
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Stack gap="xs">
            <Text size="sm" fw={600}>Выберите период:</Text>
            <Button size="xs" variant="subtle" onClick={() => setDateRange('Июнь 2026')}>Июнь 2026</Button>
            <Button size="xs" variant="subtle" onClick={() => setDateRange('Май 2026')}>Май 2026</Button>
          </Stack>
        </Popover.Dropdown>
      </Popover>

      {/* Кнопка фильтров */}
      <ActionIcon variant="white" size={36} radius="xl" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <IconAdjustmentsHorizontal size={18} />
      </ActionIcon>
    </Group>
  );
}