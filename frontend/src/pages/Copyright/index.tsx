import { Container, Title, Text, Stack, Paper, Alert, rem } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';

export function CopyrightPage() {
  const icon = <IconAlertTriangle style={{ width: rem(20), height: rem(20) }} />;

  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1} ta="center">Авторские права</Title>

        <Paper withBorder p="xl" radius="md" shadow="sm">
          <Stack gap="md">
            <Title order={2} size="h3">Интеллектуальная собственность</Title>
            <Text>
              Весь контент, представленный на сайте "Наш формат" (тексты, графические элементы, 
              дизайн и программный код), является интеллектуальной собственностью владельцев проекта 
              или их законных правообладателей, если не указано иное.
            </Text>

            <Title order={2} size="h3">Контент пользователей</Title>
            <Text>
              Публикуя материалы на нашем сайте, вы подтверждаете, что являетесь их автором 
              или обладаете всеми необходимыми правами на их распространение. 
            </Text>

            <Alert variant="light" color="yellow" title="Внимание" icon={icon} mt="md">
              Любое копирование или использование материалов сайта без письменного согласия 
              администрации запрещено и преследуется по закону.
            </Alert>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}