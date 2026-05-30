import { Paper, Skeleton, Group, Stack } from '@mantine/core';

export function ArticleLoading() {
  return (
    <Paper p="xl" radius="lg" withBorder mb="md">
      <Group mb="md">
        <Skeleton height={30} circle />
        <Skeleton height={15} width="30%" radius="xl" />
      </Group>
      <Skeleton height={25} width="70%" mb="sm" radius="xl" />
      <Skeleton height={15} width="40%" mb="xl" radius="xl" />
      <Skeleton height={250} mb="md" radius="md" />
      <Stack gap="xs">
        <Skeleton height={10} radius="xl" />
        <Skeleton height={10} radius="xl" />
        <Skeleton height={10} width="60%" radius="xl" />
      </Stack>
    </Paper>
  );
}