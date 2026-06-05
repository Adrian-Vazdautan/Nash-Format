import { useState } from 'react';
import { Paper, Group, Avatar, Text, Title, Button, ActionIcon, Box, Badge, Stack } from '@mantine/core';
import { IconClock, IconEye, IconShare, IconMessageCircle, IconHeart, IconBookmark } from '@tabler/icons-react';

export function PostCard() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(124);

  return (
    <Paper p="xl" radius="lg" withBorder mb="md" style={{ transition: '0.3s', '&:hover': { shadow: 'md' } }}>
      {/* Шапка автора */}
      <Group justify="space-between" mb="md">
        <Group gap="sm">
          <Avatar size="md" src="https://i.pravatar.cc/150?u=1" radius="xl" />
          <Box>
            <Text size="sm" fw={700}>Alex Dev</Text>
            <Text size="xs" c="dimmed">5 июня • Frontend</Text>
          </Box>
        </Group>
        <Badge variant="light" color="blue">Статья</Badge>
      </Group>

      {/* Заголовок */}
      <Title order={2} mb="xs" style={{ fontSize: '24px', letterSpacing: '-0.5px' }}>
        Как я покорял React в 2026 году: полный гайд
      </Title>
      
      {/* Мета данные */}
      <Group gap="xl" mb="md" c="dimmed" style={{ fontSize: '13px' }}>
        <Group gap={4}><IconClock size={16} /> 7 мин</Group>
        <Group gap={4}><IconEye size={16} /> 1.2k просмотров</Group>
      </Group>

      {/* Обложка */}
      <Box 
        h={240} mb="md" 
        style={{ 
          borderRadius: '16px', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center' 
        }} 
      />

      <Text lineClamp={3} mb="xl" c="gray.7" style={{ lineHeight: 1.6 }}>
        React в 2026 году — это уже не тот фреймворк, который мы знали. Серверные компоненты, 
        автоматическая оптимизация рендеринга и новые подходы к стейт-менеджменту...
      </Text>

      {/* Футер с рабочими кнопками */}
      <Group justify="space-between">
        <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} radius="xl" size="sm">
          Читать статью →
        </Button>
        
        <Group gap="xs">
          <ActionIcon 
            variant={liked ? 'filled' : 'light'} 
            color={liked ? 'red' : 'gray'} 
            onClick={() => { setLiked(!liked); setLikes(liked ? likes - 1 : likes + 1); }}
            radius="md" size="lg"
          >
            <IconHeart size={20} />
          </ActionIcon>
          <Text size="sm" fw={600} mr="xs">{likes}</Text>
          
          <ActionIcon variant="light" color="gray" radius="md" size="lg">
            <IconMessageCircle size={20} />
          </ActionIcon>
          
          <ActionIcon 
            variant={saved ? 'filled' : 'light'} 
            color={saved ? 'yellow' : 'gray'} 
            onClick={() => setSaved(!saved)}
            radius="md" size="lg"
          >
            <IconBookmark size={20} />
          </ActionIcon>

          <ActionIcon variant="light" color="gray" radius="md" size="lg">
            <IconShare size={20} />
          </ActionIcon>
        </Group>
      </Group>
    </Paper>
  );
}