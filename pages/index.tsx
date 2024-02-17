import type { NextPage } from "next";
import Head from "next/head";

import { ButtonLink } from "../components/button-link";
import { Intro } from "../components/intro";
import { Logo } from "../components/logo";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blur} />
      <Head>
        <title>Hamburg GAA Links</title>
        <meta name="description" content="Links for Hamburg GAA" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <Logo />
        <Intro />
        <div className={styles.buttons}>
          <ButtonLink
            href="https://www.meetup.com/Irish-Sports-Hurling-Camogie-Gaelic/"
            id="PBVQYPOJ"
          >
            Play with us in Hamburg
          </ButtonLink>
          <ButtonLink
            href="https://www.tg4.ie/ga/player/seinn/?pid=6328556805112&series=Cluiche%20As%20Baile&genre=Faisneis"
            id="GSCQEHGR"
          >
            📺 See us on TV 📺
          </ButtonLink>
          <ButtonLink
            href="https://www.instagram.com/hamburggaa/"
            id="R6BVUWXF"
          >
            Instagram
          </ButtonLink>
          <ButtonLink href="https://www.facebook.com/HamburgGAA" id="CIMJJCSZ">
            Facebook
          </ButtonLink>
          <ButtonLink
            href="https://www.linkedin.com/company/hamburggaa/"
            id="VUNL18GD"
          >
            LinkedIn
          </ButtonLink>
          <ButtonLink href="http://hamburggaa.de/" id="11F7QXPS">
            Club Website
          </ButtonLink>
        </div>
      </main>

      <footer className={styles.footer}>Hamburg GAA Club e.V.</footer>
    </div>
  );
};

export default Home;
