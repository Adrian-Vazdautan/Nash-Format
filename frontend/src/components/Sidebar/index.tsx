import { NavLink, Stack, Text, Divider, ScrollArea, rem, Box, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { 
  IconHome, IconHeart, IconHistory, IconInfoCircle, IconFileText, 
  IconCopyright, IconShieldLock, IconSpeakerphone, IconHelpCircle, 
  IconMailOpened 
} from '@tabler/icons-react';
import { useNavigate, Link } from 'react-router-dom';

// Вспомогательный компонент для строк в разделе "Темы"
function TopicItem({ letter, icon, label }) {
  return (
    <NavLink
      styles={themeLinkStyles}
      label={label}
      leftSection={
        <Group gap={16} wrap="nowrap" style={{ width: rem(65) }}>
          {/* Буква (слева) */}
          <Text size="sm" fw={500} c="dimmed" w={15} ta="center">
            {letter || ""}
          </Text>
          {/* Иконка (в центре) */}
          <Box w={24} h={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <span style={{ fontSize: '18px' }}>{icon}</span>
          </Box>
        </Group>
      }
    />
  );
}

export default function Sidebar() {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box 
      h="calc(100vh - 60px)" 
      w={300} 
      bg="#f8fafc" 
      style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid #e2e8f0' }}
    >
      <ScrollArea scrollbars="y" style={{ flex: 1 }} type="hover">
        <Stack gap={0} p="xs" style={{ minHeight: '100%' }}>
          
          {/* ГЛАВНОЕ МЕНЮ */}
          <NavLink label="Домой" leftSection={<IconHome size={22} stroke={1.5} />} styles={navLinkStyles} />
          <NavLink label="Лайки" leftSection={<IconHeart size={22} stroke={1.5} />} styles={navLinkStyles} />
          <NavLink label="История" leftSection={<IconHistory size={22} stroke={1.5} />} styles={navLinkStyles} />

          <Divider my="sm" color="#e2e8f0" />

          {/* ТЕМЫ */}
          <Text size="sm" fw={700} px="sm" mb={8}>Темы</Text>

          {/* Видимые всегда */}
          <TopicItem letter="В" icon="💠" label="Все темы" />
          <TopicItem letter="Б" icon="👮‍♂️" label="Безопасность" />
          <TopicItem letter="Г" icon="🤝" label="Гуманитарка" />
          <TopicItem letter="Д" icon="🎨" label="Дизайн" />
          <TopicItem letter="" icon="🧑‍🤝‍🧑" label="Друзья" />
          <TopicItem letter="Е" icon="🍔" label="Еда" />
          <TopicItem letter="И" icon="🎨" label="Искусство" />
          <TopicItem letter="" icon="🎮" label="Игры" />
          <TopicItem letter="" icon="📜" label="История" />

          {/* Чистый React-рендеринг вместо Collapse убирает баг зажатой высоты флексбокса */}
          {opened && (
            <>
              <TopicItem letter="" icon="💡" label="Инновации" />
              <TopicItem letter="К" icon="🎬" label="Кино и музыка" />
              <TopicItem letter="" icon="💄" label="Красота" />
              <TopicItem letter="" icon="🎭" label="Культура" />
              <TopicItem letter="Л" icon="📚" label="Литература" />
              <TopicItem letter="" icon="🔝" label="Лидерство" />
              <TopicItem letter="" icon="❤️" label="Любовь" />
              <TopicItem letter="М" icon="💭" label="Мечты" />
              <TopicItem letter="" icon="👗" label="Мода" />
              <TopicItem letter="" icon="📈" label="Маркетинг" />
              <TopicItem letter="" icon="➗" label="Математика" />
              <TopicItem letter="" icon="📖" label="Мои истории" />
              <TopicItem letter="Н" icon="📰" label="Новости" />
              <TopicItem letter="" icon="🧠" label="Нервы" />
              <TopicItem letter="" icon="🧪" label="Науки" />
              <TopicItem letter="О" icon="🎓" label="Образование" />
              <TopicItem letter="П" icon="🌳" label="Природа" />
              <TopicItem letter="" icon="📦" label="Прочее" />
              <TopicItem letter="" icon="⛪" label="Православие" />
              <TopicItem letter="" icon="☀️" label="Погода" />
              <TopicItem letter="Р" icon="💼" label="Работа" />
              <TopicItem letter="С" icon="⚽" label="Спорт" />
              <TopicItem letter="Т" icon="💻" label="Технологии" />
              <TopicItem letter="" icon="🔥" label="Тренды" />
              <TopicItem letter="Х" icon="🧩" label="Хобби" />
              <TopicItem letter="Э" icon="⚖️" label="Этика" />
              <TopicItem letter="" icon="🖥️" label="ЭВМ" />
              <TopicItem letter="" icon="🚀" label="Эффективность" />
            </>
          )}

          {/* Кнопка переключения */}
          <NavLink
            label={opened ? "See less" : "See more"}
            onClick={toggle}
            styles={{
              label: { color: '#64748b', fontSize: rem(14), fontWeight: 500, paddingLeft: rem(12), marginTop: rem(4) },
              root: { '&:hover': { backgroundColor: 'transparent' } }
            }}
          />

          <Divider my="sm" color="#e2e8f0" />

          {/* РЕСУРСЫ */}
          <Text size="xs" fw={700} color="dimmed" px="sm" mb="xs">РЕСУРСЫ</Text>
          <NavLink label="О сайте" component={Link} to="/about" leftSection={<IconInfoCircle size={20} stroke={1.5} />} styles={navLinkStyles} />
          <NavLink label="Правила" component={Link} to="/rules" leftSection={<IconFileText size={20} stroke={1.5} />} styles={navLinkStyles} />
          <NavLink label="Авторские права" component={Link} to="/copyright" leftSection={<IconCopyright size={20} stroke={1.5} />} styles={navLinkStyles} />
          <NavLink label="Приватность 😂" component={Link} to="/privacy" leftSection={<IconShieldLock size={20} stroke={1.5} />} styles={navLinkStyles} />
          <NavLink label="Реклама" component={Link} to="/advertising" leftSection={<IconSpeakerphone size={20} stroke={1.5} />} styles={navLinkStyles} />
          <NavLink label="Помощь" component={Link} to="/help" leftSection={<IconHelpCircle size={20} stroke={1.5} />} styles={navLinkStyles} />
          <NavLink label="Оставить отзыв" leftSection={<IconMailOpened size={20} stroke={1.5} />} styles={navLinkStyles} />

          {/* Текст куки */}
          <Box px="md" py="xl" mt="auto">
            <Text size="xs" c="dimmed" style={{ lineHeight: 1.6 }}>
              This site uses cookies. <br />
              By continuing to browse you agree <br />
              to the use of cookies in accordance <br />
              with Regulation (EU) 2016/679
            </Text>
            <Text size="xs" c="dimmed" mt="md" fw={500}>
              © 2024 Адриан Вздэуцан
            </Text>
          </Box>
        </Stack>
      </ScrollArea>
    </Box>
  );
}

const navLinkStyles = {
  root: { padding: `${rem(8)} ${rem(12)}`, borderRadius: rem(8), '&:hover': { backgroundColor: '#f1f5f9' } },
  label: { fontSize: rem(15), fontWeight: 500, color: '#334155' },
};

const themeLinkStyles = {
  root: { padding: `${rem(4)} ${rem(12)}`, borderRadius: rem(8), '&:hover': { backgroundColor: '#f1f5f9' } },
  label: { fontSize: rem(15), fontWeight: 500, color: '#334155' },
};