import { client } from "../../libs/client";
import dayjs from "dayjs";
const BlogId = ({ title, publishedAt, body }) => {
  return (
    <article className="prose mx-w-4xl mx-auto px-4">
      <h1 className="font-bold text-2xl sm:text-4xl">{title}</h1>
      <time dateTime={publishedAt} className="mt-2 block">
        {dayjs(publishedAt).format("YYYY年MM日DD日")}
      </time>
      <div className="mt-8" dangerouslySetInnerHTML={{ __html: body }} />
    </article>
  );
};
export default BlogId;

// ブログの詳細データ取得
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};
export const getStaticProps = async (ctx) => {
  const data = await client.get({
    endpoint: "blog",
    contentId: ctx.params.id,
  });
  return { props: data };
};
