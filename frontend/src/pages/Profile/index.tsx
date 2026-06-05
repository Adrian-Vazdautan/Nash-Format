import { 
  Box, Paper, Title, Text, Avatar, Group, Button, Divider, 
  Tabs, Flex, SimpleGrid, Stack, TextInput, ActionIcon, rem, Card 
} from '@mantine/core';
import { 
  IconHome, IconCake, IconSchool, IconCamera, IconVideo, IconMapPin, IconUserPlus, IconPhoto, IconUsers 
} from '@tabler/icons-react';

export function ProfilePage() {
  return (
    <Box maw={1300} mx="auto" pb={50}>
      {/* Обложка */}
      <Paper h={300} bg="gray.3" radius="0 0 8px 8px" mb={20} mt={-16} />

      {/* Аватар и Имя */}
      <Group align="flex-end" px={30} mb={20}>
        <Avatar size={160} radius={160} style={{ border: '4px solid white', marginTop: -80 }}>AV</Avatar>
        <Box mb={20}>
          <Title order={1}>Адриан Вздульцан</Title>
          <Text c="dimmed" size="lg">5 друзей</Text>
        </Box>
        <Button ml="auto" color="blue" mb={20}>Редактировать профиль</Button>
      </Group>

      {/* Вкладки */}
      <Tabs defaultValue="posts" px={30}>
        <Tabs.List>
          <Tabs.Tab value="posts">Публикации</Tabs.Tab>
          <Tabs.Tab value="about">Информация</Tabs.Tab>
          <Tabs.Tab value="friends">Друзья</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Divider my="sm" />

      {/* Блок возможных друзей */}
      <Box px={30} mb={20}>
        <Group justify="space-between" mb="xs">
          <Title order={4}>Люди, которых вы можете знать</Title>
          <Text c="blue" size="sm" style={{ cursor: 'pointer' }}>Все</Text>
        </Group>
        <SimpleGrid cols={5}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i} withBorder padding="sm" radius="md">
              <Card.Section h={120} bg="gray.2" />
              <Text fw={600} size="sm" mt="xs">Имя Друга</Text>
              <Text size="xs" c="dimmed" mb="sm">1 общий друг</Text>
              <Button fullWidth leftSection={<IconUserPlus size={14} />} size="xs" color="blue" variant="light">Добавить</Button>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      {/* Контент: Левая колонка + Лента */}
      <Flex mt={20} gap={20} px={30}>
        {/* Левая колонка */}
        <Box w={350}>
          {/* Личная информация */}
          <Paper p="md" withBorder radius="md" mb={20}>
            <Title order={4} mb="md">Личная информация</Title>
            <Stack gap="xs">
              <Group><IconMapPin size={18} /> <Text size="sm">Кишинёв</Text></Group>
              <Group><IconSchool size={18} /> <Text size="sm">École 42</Text></Group>
              <Group><IconCake size={18} /> <Text size="sm">27 ноября 1999</Text></Group>
            </Stack>
          </Paper>

          {/* Друзья */}
          <Paper p="md" withBorder radius="md" mb={20}>
            <Group justify="space-between" mb="xs">
              <Title order={4}>Друзья</Title>
              <Text c="blue" size="sm" style={{ cursor: 'pointer' }}>Все друзья</Text>
            </Group>
            <SimpleGrid cols={3} spacing="xs">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Box key={i}>
                  <Box h={90} bg="gray.2" radius="sm" />
                  <Text size="xs" fw={500} mt={4}>Имя</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Paper>

          {/* Фото */}
          <Paper p="md" withBorder radius="md">
            <Group justify="space-between" mb="xs">
              <Title order={4}>Фото</Title>
              <Text c="blue" size="sm" style={{ cursor: 'pointer' }}>Все фото</Text>
            </Group>
            <SimpleGrid cols={3} spacing="xs">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <Box key={i} h={90} bg="gray.2" radius="sm" />
              ))}
            </SimpleGrid>
          </Paper>
        </Box>

        {/* Правая колонка (Лента) */}
        <Box style={{ flex: 1 }}>
          <Paper p="md" withBorder radius="md" mb={20}>
            <Group>
              <Avatar radius="xl" />
              <TextInput placeholder="Что у вас нового?" radius="xl" style={{ flex: 1 }} />
            </Group>
            <Divider my="md" />
            <Group justify="space-around">
              <Button variant="subtle" color="gray" leftSection={<IconVideo size={16}/>}>Прямой эфир</Button>
              <Button variant="subtle" color="gray" leftSection={<IconCamera size={16}/>}>Фото/видео</Button>
            </Group>
          </Paper>
        </Box>
      </Flex>
    </Box>
  );
}