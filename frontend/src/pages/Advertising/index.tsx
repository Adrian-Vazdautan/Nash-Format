import { Container, Title, Text, Stack, Paper, Grid, Card, Button, rem } from '@mantine/core';
import { IconSpeakerphone, IconChartLine, IconUsers } from '@tabler/icons-react';

export function AdvertisementPage() {
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1} ta="center">Реклама на «Наш формат»</Title>
        
        <Text ta="center" size="lg">
          Привлекайте целевую аудиторию, размещая рекламу на нашей платформе для авторов.
        </Text>

        <Grid>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Card withBorder shadow="sm" radius="md" h="100%">
              <Stack align="center">
                <IconUsers size={40} color="var(--mantine-color-blue-6)" />
                <Title order={3} size="h4">Целевая аудитория</Title>
                <Text ta="center" size="sm">Активное сообщество авторов и читателей.</Text>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Card withBorder shadow="sm" radius="md" h="100%">
              <Stack align="center">
                <IconChartLine size={40} color="var(--mantine-color-blue-6)" />
                <Title order={3} size="h4">Результативность</Title>
                <Text ta="center" size="sm">Высокая вовлеченность и прозрачная статистика.</Text>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Card withBorder shadow="sm" radius="md" h="100%">
              <Stack align="center">
                <IconSpeakerphone size={40} color="var(--mantine-color-blue-6)" />
                <Title order={3} size="h4">Форматы</Title>
                <Text ta="center" size="sm">Баннеры, нативная реклама, спонсорские статьи.</Text>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        <Paper withBorder p="xl" radius="md" bg="gray.0" mt="md">
          <Title order={2} size="h3" ta="center">Хотите начать сотрудничество?</Title>
          <Text ta="center" mb="lg">Свяжитесь с нами для получения прайс-листа и медиа-кита.</Text>
          <Button fullWidth size="md" component="a" href="mailto:ads@nashformat.com">
            Написать нам
          </Button>
        </Paper>
      </Stack>
    </Container>
  );
}