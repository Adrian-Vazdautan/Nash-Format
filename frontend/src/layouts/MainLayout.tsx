import { Box, Flex, Container } from '@mantine/core';
import { Outlet, useLocation } from 'react-router-dom';

// Импортируем оба компонента как именованные, указывая точный путь к файлам
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export function MainLayout() {
  const location = useLocation();
  const isEditorPage = location.pathname === '/editor';
  
  return (
    <Box h="100vh" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
      <Header />
      
      <Flex style={{ flex: 1, overflow: 'hidden' }}>
        {!isEditorPage && <Sidebar />}
        
        <Box component="main" style={{ flex: 1, overflowY: 'auto', padding: '16px 0' }}>
          <Container size="xl" w="100%" px="md">
            <Outlet />
          </Container>
        </Box>
      </Flex>
    </Box>
  );
}