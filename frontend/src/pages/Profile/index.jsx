import { Paper, Title, Text, Avatar, Group, Divider } from '@mantine/core';

export function ProfilePage() {
  return (
    <Paper p="xl" radius="md" withBorder bg="white">
      <Group gap="xl">
        <Avatar size={80} radius="xl" color="blue">AV</Avatar>
        <div>
          <Title order={2}>Адриан Вздульцан</Title>
          <Text c="dimmed" size="sm">Пользователь портала «Наш Формат»</Text>
        </div>
      </Group>
      <Divider my="xl" />
      <Text size="sm">Здесь в будущем будут отображаться личные данные автора, его опубликованные статьи, лайки и настройки профиля.</Text>
    </Paper>
  );
}