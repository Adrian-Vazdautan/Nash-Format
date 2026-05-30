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
  Center,
  Stack
} from '@mantine/core';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

export function AuthPage() {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // "Авторизация удалась!"
        navigate('/'); // Переход на главную после успеха
      } else {
        alert(data.message || 'Ошибка авторизации');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось подключиться к серверу');
    }
  };

  return (
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
        <Center mb="md">
          <Text fw={900} size="xl" style={{ letterSpacing: '1px', textTransform: 'uppercase' }} c="dark">
            НАШ ФОРМАТ
          </Text>
        </Center>

        <Paper withBorder shadow="md" p={30} radius="md" bg="white">
          <Title order={2} ta="center" mt="xs" mb="sm" fw={800} size="xl">
            Войти в аккаунт
          </Title>
          <Text c="dimmed" size="sm" ta="center" mb="xl">
            Еще нет аккаунта?{' '}
            <Anchor size="sm" component={Link} to="/signup" color="orange" fw={600}>
              Создать аккаунт
            </Anchor>
          </Text>

          <form onSubmit={handleLogin}>
            <Stack gap="md">
              <TextInput 
                label="Email или Никнейм" 
                placeholder="your@email.com" 
                required 
                size="sm"
                radius="md"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />

              <PasswordInput 
                label="Пароль" 
                placeholder="Ваш пароль" 
                required 
                size="sm"
                radius="md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Group justify="space-between" mt="xs">
                <Checkbox 
                  label="Запомнить меня" 
                  color="dark" 
                  size="xs"
                />
                <Anchor component={Link} to="/recovery" size="xs" color="gray" c="dimmed">
                  Забыли пароль?
                </Anchor>
              </Group>

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

        <Text size="xs" c="dimmed" ta="center" mt="xl">
          © 2024 Адриан Вздульцан. Все права защищены.
        </Text>
      </Container>
    </Box>
  );
}