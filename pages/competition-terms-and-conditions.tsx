import Head from "next/head";
import { Logo } from "../components/logo";
import type { NextPage } from "next";
import buttonStyles from "../styles/ButtonLink.module.css";
import pageStyles from "../styles/Page.module.css";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Page: NextPage = () => {
  const [language, setLanguage] = useState("de");
  return (
    <div className={styles.container}>
      <Head>
        <title>Giveaway Terms and Conditions</title>
        <meta name="robots" content="noindex, nofollow"></meta>
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
        <div className={pageStyles.buttonGroup}>
          <button
            className={buttonStyles.button}
            onClick={() => setLanguage("de")}
          >
            Deutsch
          </button>
          <button
            className={buttonStyles.button}
            onClick={() => setLanguage("en")}
          >
            English
          </button>
        </div>
        {language === "de" ? (
          <div className={pageStyles.wrapper}>
            <h1>
              Teilnahmebedingungen für das Hamburg GAA Konzert-Ticketgewinnspiel
            </h1>
            <p>
              Diese Aktion steht in keiner Verbindung zu Instagram/Facebook und
              wird in keiner Weise von Instagram/Facebook gesponsert,
              unterstützt oder organisiert.
            </p>
            <h2>1. Veranstalter</h2>
            Hamburg GAA Club e.V., &quot;The Irish Rover&quot;, Großneumarkt 8,
            20459 Hamburg, Deutschland,{" "}
            <a href="mailto:info@hamburggaa.de">info@hamburggaa.de</a>
            <h2>2. Teilnahmeberechtigung</h2>
            <ul>
              <li>
                Teilnahmeberechtigt sind Personen ab 18 Jahren mit Wohnsitz in
                Deutschland
              </li>
              <li>
                Mitarbeiter des Veranstalters und deren Angehörige sind von der
                Teilnahme ausgeschlossen
              </li>
              <li>
                Die Teilnahme über Gewinnspielvereine und automatisierte Dienste
                ist nicht gestattet
              </li>
              <li>Pro Person ist nur eine Teilnahme möglich</li>
            </ul>
            <h2>3. Teilnahmevoraussetzungen</h2>
            <ul>
              <li>
                Folgen von{" "}
                <a
                  href="https://www.instagram.com/thecoronasofficial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @thecoronasofficial
                </a>{" "}
                und{" "}
                <a
                  href="https://www.instagram.com/hamburggaa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @hamburggaa
                </a>
              </li>
              <li>Teilen des Beitrags in der Story mit Markierung</li>
              <li>Kommentieren und Markieren eines Freundes</li>
              <li>
                Teilnahmezeitraum: 26. Februar 2025, 21:00 Uhr CET bis 14. März
                2025, 22:00 Uhr CET
              </li>
            </ul>
            <h2>4. Gewinn</h2>
            <ul>
              <li>
                2 Plätze auf der Gästeliste für das Konzert von The Coronas in
                Hamburg am 21. März 2025
              </li>
              <li>Eine Barauszahlung ist nicht möglich</li>
              <li>Der Gewinn ist nicht übertragbar</li>
              <li>
                Der Gewinner muss seinen vollständigen Namen und seine
                Telefonnummer für die Gästeliste angeben.
              </li>
              <li>
                Ein gültiger Ausweis, der mit den bei der Gewinnbestätigung
                angegebenen Daten übereinstimmt, ist beim Konzert zur
                Einlasskontrolle erforderlich.
              </li>
            </ul>
            <h2>5. Gewinnermittlung</h2>
            <ul>
              <li>
                Die Ziehung erfolgt per Zufallsprinzip unter allen berechtigten
                Teilnehmern am 14. März 2025. Ein Zeuge wird anwesend sein, um
                den Auswahlprozess zu bestätigen.
              </li>
              <li>
                Der Gewinner muss sich innerhalb von 72 Stunden zurückmelden
              </li>
              <li>
                Der Gewinner muss seinen vollständigen Namen und seine
                Telefonnummer für die Gästeliste angeben
              </li>
              <li>
                Die Benachrichtigung des Gewinners erfolgt per Instagram
                Direktnachricht
              </li>
            </ul>
            <h2>6. Datenschutz</h2>
            <ul>
              <li>
                Die erhobenen Daten werden ausschließlich zur Durchführung des
                Gewinnspiels verwendet
              </li>
              <li>
                Der Gewinner kann eine separate Einwilligung zur öffentlichen
                Bekanntgabe auf Instagram erteilen
              </li>
              <li>
                Die vollständige Datenschutzerklärung ist verfügbar unter
                https://hamburggaa.de/terms-conditions/
              </li>
            </ul>
            <h2>7. Rechte</h2>
            <ul>
              <li>
                Der Veranstalter behält sich das Recht vor, das Gewinnspiel aus
                berechtigten Gründen abzubrechen
              </li>
              <li>
                Beleidigende oder diskriminierende Kommentare führen zur
                Disqualifikation
              </li>
              <li>Der Rechtsweg ist ausgeschlossen</li>
            </ul>
            <p>
              Bitte beachten Sie die weiteren Bedingungen des
              Konzertveranstalters, die zusätzlich gelten.
            </p>
          </div>
        ) : (
          <div className={pageStyles.wrapper}>
            <h1>
              Terms and Conditions for Hamburg GAA Concert Ticket Giveaway
            </h1>
            <p>
              This promotion is not sponsored, endorsed, or administered by
              Instagram/Facebook.
            </p>
            <h2>1. Organizer</h2>
            Hamburg GAA Club e.V., &quot;The Irish Rover&quot;, Großneumarkt 8,
            20459 Hamburg, Germany,{" "}
            <a href="mailto:info@hamburggaa.de">info@hamburggaa.de</a>
            <h2>2. Eligibility</h2>
            <ul>
              <li>Open to persons aged 18+ residing in Germany</li>
              <li>
                Employees of the organizer and their relatives are excluded
              </li>
              <li>
                Participation via lottery clubs and automated services is not
                permitted
              </li>
              <li>One entry per person</li>
            </ul>
            <h2>3. How to Enter</h2>
            <ul>
              <li>
                Follow{" "}
                <a
                  href="https://www.instagram.com/thecoronasofficial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @thecoronasofficial
                </a>{" "}
                and{" "}
                <a
                  href="https://www.instagram.com/hamburggaa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @hamburggaa
                </a>
              </li>
              <li>Share post to your story with tag</li>
              <li>Comment with friend tag</li>
              <li>
                Entry period: February 26 2025 21:00 CET, to March 14 2025,
                22:00 CET
              </li>
            </ul>
            <h2>4. Prize</h2>
            <ul>
              <li>
                2 guest list spots to The Coronas concert in Hamburg on March
                21, 2025
              </li>
              <li>No cash alternatives</li>
              <li>Non-transferable</li>
              <li>
                Winner must provide their full name and their phone number for
                guest list
              </li>
              <li>
                Valid ID matching that given on win confirmation will be
                required at the concert to verify entry.
              </li>
            </ul>
            <h2>5. Winner Selection</h2>
            <ul>
              <li>
                Random selection from all eligible participants on March 14,
                2025. A witness will be present to verify the selection process.
              </li>
              <li>Winner will be contacted via Instagram direct message</li>
              <li>Winner must respond within 72 hours</li>
            </ul>
            <h2>6. Data Protection</h2>
            <ul>
              <li>Collected data will only be used for contest purposes</li>
              <li>
                Winner can provide separate consent for public announcement on
                Instagram
              </li>
              <li>
                Full privacy policy available at
                https://hamburggaa.de/terms-conditions/
              </li>
            </ul>
            <h2>7. Rights</h2>
            <ul>
              <li>
                Organizer reserves right to cancel contest for valid reasons
              </li>
              <li>
                Offensive or discriminatory comments will lead to
                disqualification
              </li>
              <li>
                Legal recourse is excluded (Der Rechtsweg ist ausgeschlossen)
              </li>
            </ul>
            <p>
              Please see the concert venue for further conditions that apply.
            </p>
          </div>
        )}
      </main>

      <footer className={styles.footer}>Hamburg GAA Club e.V.</footer>
    </div>
  );
};

export default Page;
