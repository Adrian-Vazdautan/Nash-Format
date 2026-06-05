import { Container, Title, Text, Stack, Paper, Accordion, Button } from '@mantine/core';
import { IconHelp, IconMail } from '@tabler/icons-react';

export function HelpPage() {
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1} ta="center">Центр помощи</Title>
        <Text ta="center" c="dimmed">
          Здесь вы можете найти ответы на часто задаваемые вопросы.
        </Text>

        <Paper withBorder p="xl" radius="md" shadow="sm">
          <Accordion variant="separated">
            <Accordion.Item value="account">
              <Accordion.Control icon={<IconHelp size={20} />}>Как восстановить пароль?</Accordion.Control>
              <Accordion.Panel>
                Перейдите на страницу входа и нажмите «Забыли пароль?». Мы отправим инструкцию на вашу почту.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="publishing">
              <Accordion.Control icon={<IconHelp size={20} />}>Как опубликовать статью?</Accordion.Control>
              <Accordion.Panel>
                После регистрации перейдите в личный кабинет и нажмите кнопку «Создать статью». Заполните форму и нажмите «Опубликовать».
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="payment">
              <Accordion.Control icon={<IconHelp size={20} />}>Когда я получу выплату?</Accordion.Control>
              <Accordion.Panel>
                Выплаты производятся ежемесячно, если сумма на вашем счету превышает минимальный порог.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Paper>

        <Paper withBorder p="xl" radius="md" bg="blue.0">
          <Stack align="center" gap="xs">
            <Text fw={500}>Не нашли ответ на свой вопрос?</Text>
            <Button 
              leftSection={<IconMail size={16} />} 
              variant="outline" 
              component="a" 
              href="mailto:support@nashformat.com"
            >
              Написать в поддержку
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}