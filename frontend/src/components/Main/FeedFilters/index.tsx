import { Group, Button, rem } from '@mantine/core';

export function FeedFilters() {
  return (
    <Group gap="xs" my="xl">
      <Button variant="filled" color="dark" radius="xl" size="xs">New</Button>
      <Button variant="light" color="gray" radius="xl" size="xs">The Best</Button>
      <Button variant="filled" color="blue" radius="xl" size="xs">All time</Button>
      <Button variant="subtle" color="gray" radius="xl" size="xs">Day</Button>
      <Button variant="subtle" color="gray" radius="xl" size="xs">Week</Button>
      <Button variant="subtle" color="gray" radius="xl" size="xs">Month</Button>
      <Button variant="subtle" color="gray" radius="xl" size="xs">Year</Button>
      <Button variant="subtle" color="red" radius="xl" size="xs">More filters</Button>
    </Group>
  );
}