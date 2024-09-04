import Link from "next/link";
import { Demo } from "../components/demo";
import { client } from "../libs/client";

const Home = (props) => {
  return (
    <div>
      <ul className="mt-4 space-y-4">
        {props.contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/blog/${content.id}`}>{content.title}</Link>
              <Demo />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export const getStaticProps = async () => {
  const data = await client.getList({ endpoint: "blog" });
  return {
    props: data,
  };
};
export default Home;
