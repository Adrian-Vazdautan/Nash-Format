import { NavLink, Stack, Text, Divider, ScrollArea, rem, Box, Group, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { 
  IconHome, IconHeart, IconHistory, IconInfoCircle, IconFileText, 
  IconCopyright, IconShieldLock, IconSpeakerphone, IconHelpCircle, 
  IconMailOpened, IconChevronDown, IconChevronUp 
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

// Улучшенный компонент темы с более чистым дизайном
function TopicItem({ letter, icon, label }) {
  return (
    <NavLink
      styles={themeLinkStyles}
      label={label}
      leftSection={
        <Group gap={12} wrap="nowrap" w={50}>
          <Text size="xs" fw={700} c="gray.4" w={12} ta="center">
            {letter}
          </Text>
          <Box style={{ fontSize: '18px' }}>{icon}</Box>
        </Group>
      }
    />
  );
}

export default function Sidebar() {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <>
    {opened && (
    <div className="media_display_none">
    <Box 
      h="calc(100vh - 60px)" 
      w={300} 
      bg="white" 
      style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid #e2e8f0' }}
    >
      <ScrollArea scrollbars="y" style={{ flex: 1 }} type="hover">
        <Stack gap={4} p="md" style={{ minHeight: '100%' }}>
          
          {/* ГЛАВНОЕ МЕНЮ с легким отступом */}
          <Stack gap={2}>
            <NavLink label="Домой" component={Link} to="/feed" leftSection={<IconHome size={20} stroke={2} />} styles={navLinkStyles} />
            <NavLink label="Лайки" leftSection={<IconHeart size={20} stroke={2} />} styles={navLinkStyles} />
            <NavLink label="История" leftSection={<IconHistory size={20} stroke={2} />} styles={navLinkStyles} />
          </Stack>

          <Divider my="md" color="#f1f5f9" />

          {/* ТЕМЫ */}
          <Text size="xs" fw={800} c="dimmed" tt="uppercase" px="xs" mb={4} style={{ letterSpacing: '0.5px' }}>Темы</Text>

          <TopicItem letter="В" icon="💠" label="Все темы" />
          <TopicItem letter="Б" icon="👮‍♂️" label="Безопасность" />
          <TopicItem letter="Г" icon="🤝" label="Гуманитарка" />
          <TopicItem letter="Д" icon="🎨" label="Дизайн" />
          <TopicItem letter="" icon="🧑‍🤝‍🧑" label="Друзья" />
          <TopicItem letter="Е" icon="🍔" label="Еда" />
          <TopicItem letter="И" icon="🎨" label="Искусство" />
          <TopicItem letter="" icon="🎮" label="Игры" />
          <TopicItem letter="" icon="📜" label="История" />

          {opened && (
            <>
              {/* (Остальные элементы списка оставь здесь, они отрендерились бы так же) */}
            </>
          )}

          <NavLink
            label={opened ? "Свернуть" : "Показать все"}
            onClick={toggle}
            rightSection={opened ? <IconChevronUp size={14}/> : <IconChevronDown size={14}/>}
            styles={{
              root: { color: '#64748b', borderRadius: 8, '&:hover': { backgroundColor: '#f8fafc' } },
              label: { fontSize: rem(13), fontWeight: 600, paddingLeft: rem(12) }
            }}
          />

          <Divider my="md" color="#f1f5f9" />

          {/* РЕСУРСЫ */}
          <Text size="xs" fw={800} c="dimmed" tt="uppercase" px="xs" mb={4} style={{ letterSpacing: '0.5px' }}>Ресурсы</Text>
          <Stack gap={2}>
            <NavLink label="О сайте" component={Link} to="/about" leftSection={<IconInfoCircle size={18} />} styles={navLinkStyles} />
            <NavLink label="Правила" component={Link} to="/rules" leftSection={<IconFileText size={18} />} styles={navLinkStyles} />
            <NavLink label="Авторские права" component={Link} to="/copyright" leftSection={<IconCopyright size={18} />} styles={navLinkStyles} />
            <NavLink label="Приватность" component={Link} to="/privacy" leftSection={<IconShieldLock size={18} />} styles={navLinkStyles} />
            <NavLink label="Реклама" component={Link} to="/advertising" leftSection={<IconSpeakerphone size={18} />} styles={navLinkStyles} />
            <NavLink label="Помощь" component={Link} to="/help" leftSection={<IconHelpCircle size={18} />} styles={navLinkStyles} />
            <NavLink label="Оставить отзыв" component={Link} to="/feedback" leftSection={<IconMailOpened size={18} />} styles={navLinkStyles} />
          </Stack>

          <Divider my="md" color="#f1f5f9" />
          
          {/* ФУТЕР с куки */}
          <Paper mt="auto" pt="xl" pb="md" bg="transparent">
            <Text size="xs" c="gray.5" style={{ lineHeight: 1.5 }}>
              This site uses cookies. By continuing to browse you agree to the use of cookies.
            </Text>
            <Text size="xs" c="gray.6" mt="sm" fw={600}>
              © 2024 Adrian Vzdultan
            </Text>
          </Paper>
        </Stack>
      </ScrollArea>
    </Box>
    </div>
    )}
    </>
  );
}

// Обновленные стили для премиального вида
const navLinkStyles = {
  root: { padding: `${rem(10)} ${rem(12)}`, borderRadius: rem(10), transition: '0.2s', '&:hover': { backgroundColor: '#f1f5f9' } },
  label: { fontSize: rem(14), fontWeight: 600, color: '#334155' },
  section: { marginRight: rem(14) }
};

const themeLinkStyles = {
  root: { padding: `${rem(6)} ${rem(12)}`, borderRadius: rem(8), '&:hover': { backgroundColor: '#f8fafc' } },
  label: { fontSize: rem(14), fontWeight: 500, color: '#475569' },
};