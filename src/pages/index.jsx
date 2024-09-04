import { ContentList } from "../components/ContentList.jsx";
import { client } from "../libs/client";

const Home = ({ contents }) => {
  return (
    <div>
      <ul className="mt-4 space-y-4">
        {contents.map((content) => {
          return (
            <li key={content.id}>
              <ContentList content={content} />
            </li>
          );
        })}
      </ul>
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
