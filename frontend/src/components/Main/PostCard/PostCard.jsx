import { Paper, Group, Avatar, Text, Title, Image, Button, ActionIcon, rem, Box } from '@mantine/core';
import { IconClock, IconEye, IconShare, IconMessageCircle } from '@tabler/icons-react';

export function PostCard() {
  return (
    <Paper p="xl" radius="lg" withBorder mb="md" bg="white">
      <Group justify="space-between" mb="xs">
        <Group gap="xs">
          <Avatar size="sm" src={null} alt="User" color="blue">N</Avatar>
          <Text size="sm" fw={600}>nickname</Text>
          <Text size="xs" c="dimmed">date</Text>
        </Group>
      </Group>

      <Title order={2} mb="xs" style={{ fontWeight: 800 }}>title</Title>
      
      <Group gap="lg" mb="md" c="dimmed">
        <Group gap={4}>
          <IconClock size={16} />
          <Text size="xs">минут</Text>
        </Group>
        <Group gap={4}>
          <IconEye size={16} />
          <Text size="xs">просмотров</Text>
        </Group>
      </Group>

      <Box bg="#f8fafc" h={300} style={{ borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} mb="md">
        <Text c="dimmed" fw={700} size="xl">Image</Text>
      </Box>

      <Text lineClamp={3} mb="md" c="dimmed">
        thumbnail_description статьи... длинный текст описания, который будет обрезан, если он слишком большой для превью.
      </Text>

      <Group justify="space-between">
        <Button variant="outline" color="orange" radius="xl" size="sm">Continue reading →</Button>
        <Group gap="xs">
          <ActionIcon variant="light" color="gray" radius="md" size="lg">
            <IconMessageCircle size={20} />
          </ActionIcon>
          <Button variant="light" color="gray" radius="md" leftSection={<IconShare size={18} />}>
            Share
          </Button>
        </Group>
      </Group>
    </Paper>
  );
}