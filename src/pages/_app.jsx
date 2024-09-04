import "../styles/globals.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import Link from "next/link";
const theme = createTheme({
  /** Put your mantine theme override here */
});
export default function App({ Component, pageProps }) {
  return (
    <div className="mx-auto max-w-prose">
      <header className="py-8 border-b border-gray-400">
        <h1>
          <Link href="/" className="text-4xl font-bold">
            ハリーポッターのロケ地を巡る！イギリス旅行記
          </Link>
        </h1>
      </header>
      <main className="mt-8">
        <MantineProvider theme={theme}>
          <Component {...pageProps} />
        </MantineProvider>
      </main>
    </div>
  );
}
