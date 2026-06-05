import { useRef, useState, useEffect } from 'react';
import { Paper, Text, Group, ActionIcon, Avatar, Box, Stack } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export function TopSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Проверка позиции для показа/скрытия кнопок
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Листаем на ширину карточки (240px) + gap (20px)
      const scrollAmount = 260; 
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const cards = Array.from({ length: 10 }).map((_, i) => (
    <Paper
      key={i}
      radius="xl"
      h={340}
      w={260}
      style={{
        flexShrink: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.9) 100%), url(https://picsum.photos/400/600?random=${i})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '24px',
        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
        cursor: 'pointer',
        border: '1px solid rgba(255,255,255,0.1)',
        '&:hover': { transform: 'translateY(-10px) scale(1.02)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }
      }}
    >
      <Stack gap="sm">
        <Text c="white" fw={800} size="xl" lh={1.2}>React 2026: Будущее здесь #{i + 1}</Text>
        <Group gap="xs">
          <Avatar size={28} src={`https://i.pravatar.cc/150?u=${i}`} radius="xl" />
          <Text size="sm" c="gray.1" fw={500}>Иван Иванов</Text>
        </Group>
      </Stack>
    </Paper>
  ));

  return (
    <Box pos="relative" py={0}>
      {/* Контейнер скролла */}
      <Box 
        ref={scrollRef}
        onScroll={checkScroll}
        style={{ 
          display: 'flex', 
          gap: '24px', 
          overflowX: 'auto', 
          scrollbarWidth: 'none'
        }}
      >
        {cards}
      </Box>

      {/* Кнопки с умным отображением */}
      <ActionIcon 
        onClick={() => scroll('left')} 
        pos="absolute" left={10} top="50%" size={50} radius="xl" variant="white" 
        style={{ 
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)', 
          opacity: canScrollLeft ? 1 : 0, 
          transition: '0.3s',
          zIndex: 10 
        }}
      >
        <IconChevronLeft size={28} />
      </ActionIcon>
      
      <ActionIcon 
        onClick={() => scroll('right')} 
        pos="absolute" right={10} top="50%" size={50} radius="xl" variant="white" 
        style={{ 
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)', 
          opacity: canScrollRight ? 1 : 0, 
          transition: '0.3s',
          zIndex: 10 
        }}
      >
        <IconChevronRight size={28} />
      </ActionIcon>
    </Box>
  );
}