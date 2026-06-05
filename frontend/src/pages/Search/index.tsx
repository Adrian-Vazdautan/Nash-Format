import { Container, Title, Text, Stack, Paper, Loader, Center, Flex, Box } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';
import { RightSection } from '../../components/Main/RightSection/';

// Это примерный компонент для отображения результатов
export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // В реальном приложении здесь будет логика запроса к API
  const loading = false; 
  const results = []; // Сюда придут данные из твоего поиска

return (
    <Flex gap="md" align="flex-start" wrap="nowrap">
      <Box style={{ flex: 1, minWidth: 0 }}>
        <Stack gap="md">
          <Title order={2}>Результаты поиска по запросу: "{query}"</Title>

          {loading ? (
            <Center py="xl">
              <Loader />
            </Center>
          ) : results.length > 0 ? (
            results.map((item, index) => (
              <Paper key={index} withBorder p="md" shadow="sm">
                <Title order={3}>{item.title}</Title>
                <Text c="dimmed">{item.description}</Text>
              </Paper>
            ))
          ) : (
            <Paper withBorder p="xl" ta="center">
              <Text>По вашему запросу ничего не найдено.</Text>
              <Text size="sm" c="dimmed">Попробуйте изменить формулировку поиска.</Text>
            </Paper>
          )}
        </Stack>
      </Box>
      <Box w={280} style={{ flexShrink: 0 }}>
        <RightSection />
      </Box>
    </Flex>
  );
}