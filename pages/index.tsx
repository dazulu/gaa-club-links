import { ButtonLink } from "../components/button-link";
import Head from "next/head";
import { Intro } from "../components/intro";
import { Logo } from "../components/logo";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

// import { Snow } from "../components/snow";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <Snow /> */}
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
            href="https://buchung.hochschulsport-hamburg.de/angebote/Sommersemester_2025/_Hurling_und_Camogie.html"
            id="PBVQYPOJ"
          >
            Play hurling/camogie
          </ButtonLink>
          <ButtonLink
            href="https://buchung.hochschulsport-hamburg.de/angebote/Sommersemester_2025/_Gaelic_Football.html"
            id="PBVQYPOK"
          >
            Play Gaelic Football
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
          <ButtonLink
            href="https://bsky.app/profile/hamburggaa.bsky.social"
            id="BLUESKY"
          >
            BlueSky
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
