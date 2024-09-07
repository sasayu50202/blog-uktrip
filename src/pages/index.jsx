import { BlogList } from "../components/BlogList/BlogList";
import { client } from "../libs/client";

const Home = ({ contents }) => {
  return (
    <div className="mx-w-5xl">
      <BlogList content={contents} />
    </div>
  );
};
export default Home;

// ブログのリスト取得
export const getStaticProps = async () => {
  const data = await client.getList({ endpoint: "blog" });
  return {
    props: data,
  };
};
