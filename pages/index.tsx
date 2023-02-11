import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "./home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Poll App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className} ${styles.homeWrapper}`}>
        <Link href={"/poll"}>
          <button data-cy="create-a-poll-button">Create a Poll</button>
        </Link>
      </main>
    </>
  );
}
