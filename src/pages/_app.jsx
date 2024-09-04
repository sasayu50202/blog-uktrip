import "../styles/globals.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import Link from "next/link";
const theme = createTheme({
  /** Put your mantine theme override here */
});
export default function App({ Component, pageProps }) {
  return (
    <div className="mx-auto ">
      <header className="py-8 border-b border-gray-400 flex items-center justify-center">
        <Link href="/">
          <h1 className="text-4xl font-bold">ハリーポッターのロケ地を巡る！</h1>
          <h2 className="text-2xl text-center">〜イギリス旅行記〜</h2>
        </Link>
      </header>
      <main className="mt-8">
        <MantineProvider theme={theme}>
          <Component {...pageProps} />
        </MantineProvider>
      </main>
    </div>
  );
}
