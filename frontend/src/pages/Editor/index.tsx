import { Paper, Title, TextInput, Textarea, Button, Stack } from '@mantine/core';

export function EditorPage() {
  return (
    <Paper p="xl" radius="md" withBorder bg="white">
      <Title order={2} mb="xl">Добавить новую статью</Title>
      <Stack gap="md">
        <TextInput label="Заголовок статьи" placeholder="Введите название..." required radius="md" />
        <Textarea label="Краткое описание (превью)" placeholder="О чем статья..." rows={3} radius="md" />
        <Textarea label="Текст статьи" placeholder="Пишите здесь свой шедевр..." minRows={10} required radius="md" />
        <Button color="dark" radius="md" w={200} mt="md">Опубликовать</Button>
      </Stack>
    </Paper>
  );
}