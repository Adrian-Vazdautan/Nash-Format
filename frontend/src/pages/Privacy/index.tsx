import { Container, Title, Text, Stack, Paper, List, ThemeIcon, rem } from '@mantine/core';
import { IconShieldLock, IconUser, IconDatabase, IconEye } from '@tabler/icons-react';

export function PrivacyPage() {
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1} ta="center">Политика конфиденциальности</Title>

        <Paper withBorder p="xl" radius="md" shadow="sm">
          <Stack gap="md">
            <Text c="dimmed" ta="center" mb="lg">
              Мы уважаем вашу конфиденциальность и обязуемся защищать ваши персональные данные.
            </Text>

            <Title order={2} size="h3">1. Какие данные мы собираем</Title>
            <Text>
              Мы собираем только ту информацию, которая необходима для работы сервиса, 
              включая данные вашего профиля и технические логи для обеспечения безопасности.
            </Text>

            <Title order={2} size="h3">2. Как мы используем данные</Title>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconShieldLock style={{ width: rem(14), height: rem(14) }} />
                </ThemeIcon>
              }
            >
              <List.Item>Для обеспечения работы вашего аккаунта.</List.Item>
              <List.Item>Для улучшения качества предоставляемых услуг.</List.Item>
              <List.Item>Для связи с вами по важным вопросам безопасности.</List.Item>
            </List>

            <Title order={2} size="h3">3. Ваши права</Title>
            <Text>
              Вы имеете право запросить доступ, изменение или удаление своих данных в любое время. 
              Для этого свяжитесь с нами через форму обратной связи.
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}