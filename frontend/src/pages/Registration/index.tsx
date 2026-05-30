import { Paper, TextInput, PasswordInput, Button, Title, Text, Container, Box, Center, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';

export function RegisterPage() {
  return (
    <Box style={{ width: '100vw', height: '100vh', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container size={420} w="100%">
        <Paper withBorder shadow="md" p={30} radius="md" bg="white">
          <Title order={2} ta="center" mb="sm" fw={800} size="xl">Регистрация</Title>
          <Stack gap="md">
            <TextInput label="Имя пользователя" placeholder="nickname" required radius="md" />
            <TextInput label="Email" placeholder="your@email.com" required radius="md" />
            <PasswordInput label="Пароль" placeholder="Придумайте пароль" required radius="md" />
            <Button fullWidth color="dark" radius="md" mt="md">Создать аккаунт</Button>
            <Text size="sm" ta="center" mt="xs">
              Уже есть аккаунт? <Link to="/auth" style={{ color: '#f97316', fontWeight: 600, textDecoration: 'none' }}>Войти</Link>
            </Text>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}