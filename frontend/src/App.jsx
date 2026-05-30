import { Paper, Box, Flex, Container, Title, Text, Button } from '@mantine/core';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { TopSlider } from './components/Main/TopSlider/TopSlider';
import { FeedFilters } from './components/Main/FeedFilters/FeedFilters';
import { PostCard } from './components/Main/PostCard/PostCard';
import { ArticleLoading } from './components/Main/ArticleLoading/ArticleLoading';
import { RightSection } from './components/Main/RightSection/RightSection';

export default function App() {
  const isLoading = false; // Поменяй на true, чтобы увидеть анимацию загрузки

  return (
    <Box h="100vh" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
      <Header />
      <Flex style={{ flex: 1, overflow: 'hidden' }}>
        <Sidebar />
        <Box component="main" style={{ flex: 1, overflowY: 'auto', padding: '24px 0' }}>
          <Container size="xl" w="100%" px="md">
            <Flex gap="xl" align="flex-start">
              
              {/* ЛЕНТА */}
              <Box style={{ flex: 1, minWidth: 0 }}>
                <TopSlider />
                <FeedFilters />
                
                {/* Блок НОВОСТИ */}
                <Paper p="xl" radius="lg" withBorder mb="xl" bg="white" pos="relative">
                   <Title order={2} c="dark">НОВОСТИ</Title>
                   <Text c="dimmed" size="xs">date</Text>
                   <Box h={2} bg="red" w={50} my="md" />
                   <Text size="sm" mb="xl">thumbnail_description новости...</Text>
                   <Button variant="subtle" color="blue" p={0}>Показать больше</Button>
                </Paper>

                {/* ПОСТЫ или СКЕЛЕТОН */}
                {isLoading ? (
                  <>
                    <ArticleLoading />
                    <ArticleLoading />
                  </>
                ) : (
                  <>
                    <PostCard />
                    <PostCard />
                  </>
                )}
              </Box>

              {/* ПРАВАЯ ЧАСТЬ */}
              <Box w={320} style={{ flexShrink: 0 }}>
                <RightSection />
              </Box>

            </Flex>
          </Container>
        </Box>
      </Flex>
    </Box>
  );
}