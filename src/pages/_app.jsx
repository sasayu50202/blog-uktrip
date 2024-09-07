import "../styles/globals.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import Link from "next/link";
import { Header } from "../components/Header";
const theme = createTheme({
  /** Put your mantine theme override here */
});
export default function App({ Component, pageProps }) {
  return (
    <div className="mx-auto">
      <Header />
      <main className="mt-8 ">
        <MantineProvider theme={theme}>
          <Component {...pageProps} />
        </MantineProvider>
      </main>
    </div>
  );
}
