import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Paper, TextInput, PasswordInput, Button, Title, Text, Container, Box, Stack } from '@mantine/core';

export function RegisterPage() {
  const [nickname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ nickname, email, password }),
      });

      if (response.ok) {
        navigate('/auth'); // Успех! Идем на страницу входа
      } else {
        const errorData = await response.json();
        alert(JSON.stringify(errorData.errors)); // Показываем ошибки от Laravel
      }
    } catch (err) {
      console.error('Ошибка связи с сервером:', err);
    }
  };

  return (
    <Box style={{ width: '100vw', height: '100vh', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container size={420} w="100%">
        <Paper withBorder shadow="md" p={30} radius="md" bg="white">
          <Title order={2} ta="center" mb="sm" fw={800} size="xl">Регистрация</Title>
          
          <form onSubmit={handleRegister}>
            <Stack gap="md">
              <TextInput 
                label="Имя пользователя" placeholder="nickname" required radius="md" 
                value={nickname} onChange={(e) => setName(e.target.value)} 
              />
              <TextInput 
                label="Email" placeholder="your@email.com" required radius="md" 
                value={email} onChange={(e) => setEmail(e.target.value)} 
              />
              <PasswordInput 
                label="Пароль" placeholder="Придумайте пароль" required radius="md" 
                value={password} onChange={(e) => setPassword(e.target.value)} 
              />
              <Button fullWidth color="dark" radius="md" mt="md" type="submit">
                Создать аккаунт
              </Button>
              <Text size="sm" ta="center" mt="xs">
                Уже есть аккаунт? <Link to="/auth" style={{ color: '#f97316', fontWeight: 600, textDecoration: 'none' }}>Войти</Link>
              </Text>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}