import { Flex, Box } from '@mantine/core';
import { TopSlider } from '../../components/Main/TopSlider/';
import { FeedFilters } from '../../components/Main/FeedFilters/';
import { PostCard } from '../../components/Main/PostCard/';
import { ArticleLoading } from '../../components/Main/ArticleLoading/';
import { RightSection } from '../../components/Main/RightSection/';

export function FeedPage() {
  return (
    <Flex gap="md" align="flex-start" wrap="nowrap">
      <Box style={{ flex: 1, minWidth: 0 }}>
        <TopSlider />
        <FeedFilters />
        <PostCard />
        <ArticleLoading />
      </Box>
      <Box w={280} style={{ flexShrink: 0 }}>
        <RightSection />
      </Box>
    </Flex>
  );
}