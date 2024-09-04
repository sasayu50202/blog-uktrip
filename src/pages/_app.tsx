import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-prose">
      <header className="py-8 border-b border-gray-400">
        <h1>
          <Link href="/" className="text-5xl font-bold">
            Blog
          </Link>
        </h1>
      </header>
      <main className="mt-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
