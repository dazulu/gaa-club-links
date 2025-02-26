import * as Fathom from "fathom-client";

import Link, { LinkProps } from "next/link";

import styles from "../styles/ButtonLink.module.css";

export const ButtonLink: React.FC<
  LinkProps & { children: React.ReactNode; id?: string }
> = ({ children, href, id }) => {
  return (
    <Link href={href}>
      <a
        className={styles.button}
        onClick={() => {
          if (id) {
            Fathom.trackGoal(id, 0);
          }
        }}
      >
        {children}
      </a>
    </Link>
  );
};
