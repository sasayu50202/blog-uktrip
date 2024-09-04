import { client } from "@/libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
export type Blog = {
  title: string;
  body: string;
};
type Props = MicroCMSListResponse<Blog>;
const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <ul className="mt-4 space-y-4">
        {props.contents.map((content) => {
          return (
            <li key={content.id}>
              <Link
                className="text-blue-800 text-xl underline hover:text-blue-400"
                href={`/blog/${content.id}`}
              >
                {content.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  return {
    props: data,
  };
};
export default Home;
