import { ContentList } from "../components/ContentList";
import { client } from "../libs/client";

const Home = ({ contents }) => {
  return (
    <ul>
      <li key={contents.id}>
        <ContentList content={contents} />
      </li>
    </ul>
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
