import type { NextPage } from "next";
import Head from "next/head";

import { Logo } from "../components/logo";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hamburg GAA Links</title>
        <meta name="description" content="Links for Hamburg GAA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Logo />
        </div>
      </main>

      <footer className={styles.footer}>d</footer>
    </div>
  );
};

export default Home;
