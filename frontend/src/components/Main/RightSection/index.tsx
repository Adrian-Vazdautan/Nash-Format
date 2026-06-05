import { Stack, Paper, Title, Text, Avatar, Group, Button, Divider, Box, Indicator, Badge, ActionIcon } from '@mantine/core';
import { IconUserPlus, IconExternalLink, IconEye, IconMessageCircle } from '@tabler/icons-react';

// Наполнение: 10 пользователей
const authors = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: ['Алексей', 'Мария', 'Дмитрий', 'Елена', 'Иван', 'Анна', 'Сергей', 'Ольга', 'Николай', 'Виктория'][i],
  role: ['Frontend', 'UX/UI', 'Backend', 'DevOps', 'QA', 'Fullstack', 'Mobile', 'Data Sci', 'Product', 'Design'][i],
  isOnline: Math.random() > 0.4,
  avatar: `https://i.pravatar.cc/150?u=${i}`
}));

// Наполнение: 10 рекомендаций с расширенными данными
const recommendations = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: [
    'Как эффективно использовать React Server Components в крупных проектах 2026 года',
    'Полный гайд по современным UI трендам для мобильных приложений',
    'Почему бэкенд на Rust становится стандартом индустрии в высоконагруженных системах',
    'Оптимизация производительности с помощью CSS Grid и современных техник верстки',
    'Продвинутые приемы TypeScript, которые сэкономят вам сотни часов отладки',
    'Как построить успешную карьеру в IT, если ты начинаешь с нуля в 2026 году',
    'Сравнение популярных фреймворков: какой выбрать для стартапа в этом квартале',
    'Архитектурные паттерны для масштабируемого API дизайна микросервисов',
    'Безопасность фронтенда: как защитить данные пользователей от современных угроз',
    'Автоматизированное тестирование: лучшие практики для QA инженеров в эпоху AI'
  ][i],
  category: ['Frontend', 'Design', 'Backend', 'CSS', 'JS', 'Career', 'Tech', 'API', 'Security', 'QA'][i],
  views: Math.floor(Math.random() * 5000) + 100,
  comments: Math.floor(Math.random() * 100),
  date: '5 июня'
}));

export function RightSection() {
  return (
    <Stack gap="lg">
      {/* Фейковая реклама */}
      <Paper withBorder radius="lg" p="lg" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
         <Title order={5} c="white" mb="xs">Хочешь стать профи?</Title>
         <Text size="sm" c="white" mb="md" style={{ opacity: 0.9 }}>Курсы по React 2026 со скидкой 50%!</Text>
         <Button variant="white" color="blue" size="xs" rightSection={<IconExternalLink size={14}/>}>
           Узнать больше
         </Button>
      </Paper>

      {/* Топ авторов */}
      <Paper p="md" withBorder radius="lg">
        <Title order={5} mb="md">Топ авторов</Title>
        <Stack gap="sm">
          {authors.map((author) => (
            <Group key={author.id} justify="space-between" wrap="nowrap">
              <Group gap="sm" wrap="nowrap">
                <Indicator color={author.isOnline ? 'green' : 'gray'} position="bottom-end" size={8} offset={2} processing={author.isOnline}>
                  <Avatar src={author.avatar} radius="xl" size="sm" />
                </Indicator>
                <Box style={{ overflow: 'hidden' }}>
                  <Text size="sm" fw={500} truncate>{author.name}</Text>
                  <Text size="xs" c="dimmed">{author.role}</Text>
                </Box>
              </Group>
              <ActionIcon variant="subtle" color="gray" radius="xl" size="sm">
                <IconUserPlus size={14} />
              </ActionIcon>
            </Group>
          ))}
        </Stack>
      </Paper>

      {/* Рекомендации с дивидерами и метаданными */}
      <Paper p="md" withBorder radius="lg">
        <Title order={5} mb="sm">Рекомендуемое</Title>
        <Stack gap="xs">
          {recommendations.map((rec, index) => (
            <Box key={rec.id}>
              <Box p="xs" style={{ borderRadius: '8px', cursor: 'pointer', transition: '0.2s', '&:hover': { background: '#f8f9fa' } }}>
                <Badge size="xs" color="gray" variant="light">{rec.category}</Badge>
                <Text fw={500} size="sm" mt={4} lh={1.3}>{rec.title}</Text>
                <Group mt="xs" gap="md">
                    <Group gap={4}>
                        <IconEye size={14} color="gray" />
                        <Text size="xs" c="dimmed">{rec.views}</Text>
                    </Group>
                    <Group gap={4}>
                        <IconMessageCircle size={14} color="gray" />
                        <Text size="xs" c="dimmed">{rec.comments}</Text>
                    </Group>
                </Group>
              </Box>
              {index < recommendations.length - 1 && <Divider my="xs" />}
            </Box>
          ))}
        </Stack>
        <Divider my="sm" />
        <Button fullWidth variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} radius="md">
          Опубликовать бесплатно
        </Button>
      </Paper>
    </Stack>
  );
}