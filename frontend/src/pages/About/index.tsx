import { Container, Title, Text, Stack, Paper, List, ThemeIcon, rem } from '@mantine/core';
import { IconInfoCircle, IconCurrencyDollar, IconCheck } from '@tabler/icons-react';

export function AboutPage() {
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        {/* Заголовок */}
        <Title order={1} ta="center" mb="md">
          О проекте "Наш формат"
        </Title>

        {/* Основное описание */}
        <Paper withBorder p="xl" radius="md" shadow="sm">
          <Stack gap="md">
            <Text size="lg" fw={500}>
              Добро пожаловать в "Наш формат"!
            </Text>
            <Text c="dimmed">
              Это площадка для создания статей на любые темы. Мы верим, что каждый человек имеет право быть услышанным, 
              а качественный контент должен приносить доход автору.
            </Text>
          </Stack>
        </Paper>

        {/* Блок с преимуществами */}
        <Paper withBorder p="xl" radius="md" shadow="sm">
          <Title order={2} size="h3" mb="md">Почему мы?</Title>
          <List
            spacing="sm"
            size="sm"
            center
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconCheck style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <List.Item>Удобный редактор для ваших мыслей.</List.Item>
            <List.Item>Возможность зарабатывать на просмотрах ваших статей.</List.Item>
            <List.Item>Разнообразие тем: от технологий до искусства.</List.Item>
            <List.Item>Дружелюбное сообщество и честная модерация.</List.Item>
          </List>
        </Paper>

        {/* Блок про деньги */}
        <Paper withBorder p="xl" radius="md" bg="blue.0">
          <Stack align="center" gap="xs">
            <IconCurrencyDollar size={40} color="var(--mantine-color-blue-7)" />
            <Text fw={700} size="xl">Начинайте зарабатывать уже сегодня</Text>
            <Text ta="center" c="dimmed">
              Создавайте контент, который интересен людям, и получайте вознаграждение за каждый просмотр.
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}