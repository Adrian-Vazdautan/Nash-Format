import { Paper, TextInput, Button, Title, Text, Container, Box, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';

export function RecoveryPage() {
  return (
    <Box style={{ width: '100vw', height: '100vh', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container size={420} w="100%">
        <Paper withBorder shadow="md" p={30} radius="md" bg="white">
          <Title order={2} ta="center" mb="xs" fw={800} size="xl">Восстановление доступа</Title>
          <Text size="xs" c="dimmed" ta="center" mb="md">Введите ваш Email, и мы отправим вам инструкции по сбросу пароля.</Text>
          <Stack gap="md">
            <TextInput label="Email" placeholder="your@email.com" required radius="md" />
            <Button fullWidth color="dark" radius="md">Сбросить пароль</Button>
            <Text size="sm" ta="center" mt="xs">
              <Link to="/auth" style={{ color: '#64748b', textDecoration: 'none' }}>Вернуться к авторизации</Link>
            </Text>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}