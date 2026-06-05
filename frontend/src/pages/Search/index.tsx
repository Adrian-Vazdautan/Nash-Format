import { 
  Container, Title, Text, Stack, Paper, Loader, Center, Flex, Box, 
  Group, ThemeIcon, ActionIcon, Highlight, Button, Select, Divider 
} from '@mantine/core';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  IconSearch, IconFileText, IconArrowRight, IconMoodSadSquint, 
  IconSparkles, IconFilter, IconPlus 
} from '@tabler/icons-react';
import { RightSection } from '../../components/Main/RightSection/';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  
  const loading = false; 
  const results = []; // Если сюда добавить данные, отобразятся результаты

  return (
    <Container size={1200} py="xl">
      <Flex gap="xl" align="flex-start" wrap="nowrap">
        
        {/* Основная часть контента */}
        <Box style={{ flex: 1, minWidth: 0 }}>
          <Stack gap="lg">
            <Group justify="space-between">
              <Box>
                <Title order={2}>Поиск</Title>
                <Text size="sm" c="dimmed">Результаты по запросу: "{query}"</Text>
              </Box>
              
              {/* Фильтры */}
              <Group gap="xs">
                <Select
                  placeholder="Фильтр"
                  data={['Все', 'Статьи', 'Авторы']}
                  leftSection={<IconFilter size={14} />}
                  w={150}
                />
              </Group>
            </Group>

            <Divider />

            {loading ? (
              <Center py={100}><Loader type="dots" size="xl" /></Center>
            ) : results.length > 0 ? (
              <Stack gap="md">
                {results.map((item: any, index: number) => (
                  <Paper key={index} withBorder p="md" radius="lg">
                    <Text fw={700}>{item.title}</Text>
                  </Paper>
                ))}
              </Stack>
            ) : (
              /* Состояние: пусто */
              <Paper p={60} radius="xl" withBorder bg="var(--mantine-color-gray-0)" style={{ textAlign: 'center', position: 'relative' }}>
                <Box style={{ position: 'absolute', top: 20, right: 20, opacity: 0.2 }}>
                  <IconSparkles size={100} />
                </Box>
                
                <Stack align="center" gap="md">
                  <ThemeIcon size={80} radius={100} variant="light" color="gray">
                    <IconMoodSadSquint size={40} />
                  </ThemeIcon>
                  <Box>
                    <Title order={3}>Ничего не нашлось</Title>
                    <Text c="dimmed">Мы не нашли публикаций по вашему запросу.</Text>
                  </Box>
                  
                  <Group mt="md">
                    <Button variant="default" onClick={() => navigate('/')}>На главную</Button>
                    <Button 
                      leftSection={<IconPlus size={18} />}
                      variant="gradient" 
                      gradient={{ from: 'blue', to: 'cyan' }}
                      onClick={() => navigate('/editor')}
                    >
                      Создать свою статью
                    </Button>
                  </Group>
                </Stack>
              </Paper>
            )}
          </Stack>
        </Box>

        {/* Правая колонка */}
        <Box w={300} style={{ flexShrink: 0 }}>
          <RightSection />
        </Box>
      </Flex>
    </Container>
  );
}