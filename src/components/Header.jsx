import Link from "next/link";
export const Header = () => {
  return (
    <header className="py-8 border-b border-gray-400 flex items-center justify-center">
      <Link href="/">
        <h1 className="text-2xl  font-bold sm:text-4xl">
          ハリーポッターのロケ地を巡る！
        </h1>
        <h2 className="text-1xl text-center sm:text-2xl ">
          〜イギリス旅行記〜
        </h2>
      </Link>
    </header>
  );
};
