import { client } from "@/libs/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Blog } from "..";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import dayjs from "dayjs";
type Props = Blog & MicroCMSContentId & MicroCMSDate;
const BlogId: NextPage<Props> = (props) => {
  return (
    <div>
      <h1 className="font-bold text-4xl">{props.title}</h1>
      <time dateTime={props.publishedAt} className="mt-2 block">
        {dayjs(props.publishedAt).format("YYYY年MM日DD日")}
      </time>
      <div
        className="prose prose-sm mt-8"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const data = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId: ctx.params.id,
  });
  return { props: data };
};
export default BlogId;
