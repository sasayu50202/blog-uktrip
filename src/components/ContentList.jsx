import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";
import classes from "./ContentList.module.css";
import dayjs from "dayjs";

export function ContentList({ content, publishedAt }) {
  const contents = content.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href={`/blog/${article.id}`}
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src="/IMG_2133.png" alt="" />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {dayjs(publishedAt).format("YYYY年MM日DD日")}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{contents}</SimpleGrid>
    </Container>
  );
}
