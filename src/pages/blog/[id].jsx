import { client } from "../../libs/client";
import dayjs from "dayjs";
const BlogId = ({ title, publishedAt, body }) => {
  return (
    <div>
      <h1 className="font-bold text-4xl">{title}</h1>
      <time dateTime={publishedAt} className="mt-2 block">
        {dayjs(publishedAt).format("YYYY年MM日DD日")}
      </time>
      <div
        className="prose prose-sm mt-8"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
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
