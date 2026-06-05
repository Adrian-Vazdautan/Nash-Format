import { Container, Title, Text, Stack, Paper, List, Divider } from '@mantine/core';

export function TermsPage() {
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1} ta="center">Правила использования сайта</Title>
        
        <Text c="dimmed" ta="center">
          Последнее обновление: 5 июня 2026 г.
        </Text>

        <Paper withBorder p="xl" radius="md" shadow="sm">
          <Stack gap="md">
            <Title order={2} size="h3">1. Принятие условий</Title>
            <Text>
              Используя наш сайт, вы соглашаетесь соблюдать настоящие правила. 
              Если вы не согласны с какими-либо положениями, пожалуйста, прекратите использование сервиса.
            </Text>

            <Divider my="sm" />

            <Title order={2} size="h3">2. Контент пользователей</Title>
            <Text>
              Вы несете полную ответственность за контент, который публикуете:
            </Text>
            <List spacing="xs" size="sm" withPadding>
              <List.Item>Запрещена публикация материалов, нарушающих законодательство.</List.Item>
              <List.Item>Запрещено распространение спама и вредоносного ПО.</List.Item>
              <List.Item>Контент должен быть уникальным и соответствовать тематике площадки.</List.Item>
            </List>

            <Divider my="sm" />

            <Title order={2} size="h3">3. Ограничение ответственности</Title>
            <Text>
              Администрация сайта не несет ответственности за любой ущерб, возникший в результате 
              использования или невозможности использования нашего сервиса.
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}