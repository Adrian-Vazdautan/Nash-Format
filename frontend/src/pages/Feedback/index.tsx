import { Container, Title, Text, Stack, Paper, Grid, Card, Avatar, Rating, Textarea, Button } from '@mantine/core';
import { IconMessageCircle } from '@tabler/icons-react';

export function FeedbackPage() {
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1} ta="center">Отзывы о нас</Title>
        
        {/* Блок с существующими отзывами */}
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Card withBorder radius="md" p="md">
              <Stack gap="xs">
                <Avatar radius="xl" />
                <Text fw={700}>Алексей</Text>
                <Rating value={5} readOnly />
                <Text size="sm">Отличная площадка! Очень удобно публиковать свои статьи и следить за статистикой.</Text>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Card withBorder radius="md" p="md">
              <Stack gap="xs">
                <Avatar radius="xl" />
                <Text fw={700}>Мария</Text>
                <Rating value={4} readOnly />
                <Text size="sm">Хороший сервис, хотелось бы больше инструментов для оформления текста, но в целом всё супер!</Text>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Форма для нового отзыва */}
        <Paper withBorder p="xl" radius="md" shadow="sm" mt="md">
          <Title order={2} size="h3" mb="md">Оставить отзыв</Title>
          <Stack gap="md">
            <Rating size="lg" />
            <Textarea 
              label="Ваш комментарий" 
              placeholder="Расскажите, что вам понравилось или что можно улучшить..." 
              minRows={4} 
            />
            <Button leftSection={<IconMessageCircle size={16} />}>Отправить отзыв</Button>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}