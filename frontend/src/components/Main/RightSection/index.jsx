import { Stack, Paper, Title, Text, Avatar, Group, Button, Divider, Box } from '@mantine/core';

export function RightSection() {
  return (
    <Stack gap="lg">
      {/* Баннер / Реклама */}
      <Paper withBorder radius="lg" h={400} bg="white" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <Text c="dimmed">Ad / Banner Space</Text>
      </Paper>

      {/* Популярные авторы */}
      <Paper p="md" withBorder radius="lg" bg="white">
        <Title order={5} mb="md">Top 10 popular authors for last year</Title>
        <Text size="sm" c="dimmed" ta="center" py="xl">No result found</Text>
      </Paper>

      {/* Рекомендации */}
      <Paper p="md" withBorder radius="lg" bg="white">
        <Title order={5} mb="sm">Recommended</Title>
        <Box mb="md">
           <Text size="xs" c="dimmed">date</Text>
           <Text fw={600}>title</Text>
           <Text size="xs" c="dimmed">.../...</Text>
        </Box>
        <Divider mb="md" />
        <Button fullWidth variant="light" color="gray" radius="md">
          Post an article for free
        </Button>
      </Paper>
    </Stack>
  );
}