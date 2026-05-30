import { Paper, Text, Group, ActionIcon, Box, Avatar, rem } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export function TopSlider() {
  const cards = [1, 2, 3, 4].map((i) => (
    <Paper
      key={i}
      shadow="md"
      p="xl"
      radius="lg"
      h={280}
      w={220}
      style={{
        backgroundSize: 'cover',
        backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .8) 100%), url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative'
      }}
    >
      <Box>
        <Text c="white" fw={700} size="xl" lh={1.2}>title</Text>
        <Text c="dimmed" size="xs" mb="xs">text</Text>
        <Group gap="xs">
          <Avatar size={18} radius="xl" />
          <Text size="xs" c="white">nickname</Text>
        </Group>
      </Box>
    </Paper>
  ));

  return (
    <Box pos="relative">
      <Group wrap="nowrap" gap="md" style={{ overflow: 'hidden' }}>
        {cards}
      </Group>
      
      <ActionIcon 
        variant="filled" 
        color="dark" 
        radius="xl" 
        size="lg"
        pos="absolute" 
        right={-15} 
        top="45%"
        style={{ zIndex: 2, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
      >
        <IconChevronRight size={20} />
      </ActionIcon>
    </Box>
  );
}