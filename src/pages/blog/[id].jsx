import { client } from "../../libs/client";
import { Blog } from "..";
import dayjs from "dayjs";
const BlogId = (props) => {
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
export default BlogId;
