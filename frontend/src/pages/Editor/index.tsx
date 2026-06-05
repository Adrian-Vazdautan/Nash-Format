import { 
  Paper, Title, TextInput, Textarea, Button, Stack, Group, 
  Select, Box, Text, Container, Badge, ActionIcon, ScrollArea, 
  Divider, Accordion, Progress, Tooltip
} from '@mantine/core';
import { 
  IconLayoutGridAdd, IconArrowLeft, IconEdit, IconTrash, 
  IconSeo, IconDeviceFloppy 
} from '@tabler/icons-react';

const myPosts = [
  { id: 1, title: 'Как я изучал React в 2026', status: 'published', views: 124 },
  { id: 2, title: 'Тренды дизайна интерфейсов', status: 'draft', views: 0 },
  { id: 3, title: 'Мои путешествия по Европе', status: 'draft', views: 12 },
];

export function EditorPage() {
  return (
    <Container size={1400} py="xl">
      <Group align="flex-start" gap="xl" wrap="nowrap">
        
        {/* ЛЕВАЯ ЧАСТЬ */}
        <Box style={{ flex: 1 }}>
          <Button variant="subtle" color="gray" leftSection={<IconArrowLeft size={16} />} mb="md">Назад</Button>
          
          <Paper withBorder p="xl" radius="lg" shadow="sm">
            <Stack gap="lg">
              <Group justify="space-between">
                <Box>
                  <Title order={2}>Создание публикации</Title>
                  <Text c="dimmed" size="sm">Режим черновика • Сохранено</Text>
                </Box>
                <Progress value={75} w={100} color="green" />
              </Group>

              <TextInput label="Заголовок" placeholder="Название..." size="md" required />
              
              <Group grow>
                <Select label="Категория" data={['Технологии', 'Дизайн']} />
                <TextInput label="Теги" placeholder="react, web" />
              </Group>

              <Textarea label="Основной текст" placeholder="Начните писать..." minRows={10} autosize required />

              {/* SEO АККОРДЕОН */}
              <Accordion variant="separated">
                <Accordion.Item value="seo">
                  <Accordion.Control icon={<IconSeo size={20} />}>SEO настройки</Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap="sm">
                      <TextInput label="URL Slug" placeholder="kak-ya-izuchal-react" />
                      <Textarea label="Description" placeholder="Краткое описание для Google..." />
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>

              <Group justify="flex-end" pt="md">
                <Button variant="default" leftSection={<IconDeviceFloppy size={16} />}>Сохранить</Button>
                <Button color="blue" leftSection={<IconLayoutGridAdd size={18} />}>Опубликовать</Button>
              </Group>
            </Stack>
          </Paper>
        </Box>

        {/* ПРАВАЯ ЧАСТЬ */}
        <Paper withBorder p="md" radius="lg" style={{ width: 340, flexShrink: 0 }}>
          <Title order={4} mb="md">Мои публикации</Title>
          <Divider mb="md" />
          <ScrollArea h={500}>
            <Stack gap="sm">
              {myPosts.map((post) => (
                <Paper key={post.id} withBorder p="sm" radius="md">
                  <Stack gap={6}>
                    <Text size="sm" fw={600} truncate>{post.title}</Text>
                    <Group justify="space-between">
                      <Badge size="xs" variant="light" color={post.status === 'published' ? 'green' : 'gray'}>
                        {post.status === 'published' ? 'Опубликовано' : 'Черновик'}
                      </Badge>
                      <Group gap={8}>
                        <Text size="xs" c="dimmed">{post.views} просмотров</Text>
                        <ActionIcon variant="subtle" size="sm" color="gray"><IconEdit size={14} /></ActionIcon>
                        <ActionIcon variant="subtle" size="sm" color="red"><IconTrash size={14} /></ActionIcon>
                      </Group>
                    </Group>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </ScrollArea>
        </Paper>

      </Group>
    </Container>
  );
}