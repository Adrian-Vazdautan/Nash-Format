import { 
  Paper, 
  TextInput, 
  PasswordInput, 
  Checkbox, 
  Button, 
  Title, 
  Text, 
  Anchor, 
  Container, 
  Group, 
  Box,
  Center
} from '@mantine/core';

export function AuthPage() {
  return (
    // Полноэкранный контейнер с легким фоном, как у тебя на сайте
    <Box 
      style={{ 
        width: '100vw', 
        height: '100vh', 
        backgroundColor: '#f1f5f9', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <Container size={420} w="100%">
        {/* Логотип или Название портала */}
        <Center mb="md">
          <Text fw={900} size="xl" style={{ letterSpacing: '1px', textTransform: 'uppercase' }} c="dark">
            НАШ ФОРМАТ
          </Text>
        </Center>

        {/* Белая карточка формы */}
        <Paper withBorder shadow="md" p={30} radius="md" bg="white">
          <Title order={2} ta="center" mt="xs" mb="sm" fw={800} size="xl">
            Войти в аккаунт
          </Title>
          <Text c="dimmed" size="sm" ta="center" mb="xl">
            Еще нет аккаунта?{' '}
            <Anchor size="sm" component="button" color="orange" fw={600}>
              Создать аккаунт
            </Anchor>
          </Text>

          <form onSubmit={(e) => e.preventDefault()}>
            <Stack gap="md">
              {/* Поле Email / Логин */}
              <TextInput 
                label="Email или Никнейм" 
                placeholder="your@email.com" 
                required 
                size="sm"
                radius="md"
              />

              {/* Поле Пароля */}
              <PasswordInput 
                label="Пароль" 
                placeholder="Ваш пароль" 
                required 
                size="sm"
                radius="md"
              />

              {/* Запомнить меня + Забыли пароль */}
              <Group justify="space-between" mt="xs">
                <Checkbox 
                  label="Запомнить меня" 
                  color="dark" 
                  size="xs"
                  style={{ cursor: 'pointer' }}
                />
                <Anchor component="button" size="xs" color="gray" c="dimmed">
                  Забыли пароль?
                </Anchor>
              </Group>

              {/* Кнопка Войти */}
              <Button 
                fullWidth 
                mt="xl" 
                color="dark" 
                radius="md" 
                size="sm"
                type="submit"
              >
                Войти
              </Button>
            </Stack>
          </form>
        </Paper>

        {/* Копирайт в самом низу страницы авторизации */}
        <Text size="xs" c="dimmed" ta="center" mt="xl">
          © 2024 Адриан Вздульцан. Все права защищены.
        </Text>
      </Container>
    </Box>
  );
}