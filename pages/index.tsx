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
          <div>
            <p className={styles.supportText}>
              Support our German ladies teams at the World Games in Derry 2023
            </p>
            <div className={styles.buttonGroup}>
              <ButtonLink href="https://gofund.me/ca0e3cb9" id="EJWF1VDP">
                Support Camogie
              </ButtonLink>
              <ButtonLink
                href="https://www.gofundme.com/f/german-ladies-gaelic-football-team-world-games"
                id="VRQP2KOP"
              >
                Support Gaelic Football
              </ButtonLink>
            </div>
          </div>
          <ButtonLink
            href="https://www.tg4.ie/ga/player/seinn/?pid=6328556805112&series=Cluiche%20As%20Baile&genre=Faisneis"
            id="GSCQEHGR"
          >
            📺 See us on TV 📺
          </ButtonLink>
          <ButtonLink
            href="https://www.meetup.com/Irish-Sports-Hurling-Camogie-Gaelic/"
            id="PBVQYPOJ"
          >
            Play in Hamburg
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
          <ButtonLink href="https://twitter.com/HamburgGAA" id="XM8G8FBE">
            Twitter
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
