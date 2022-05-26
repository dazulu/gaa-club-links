import Link, { LinkProps } from "next/link";
import * as Fathom from "fathom-client";

import styles from "../styles/ButtonLink.module.css";

export const ButtonLink: React.FC<
  LinkProps & { children: React.ReactNode; id: string }
> = ({ children, href, id }) => {
  return (
    <Link href={href}>
      <a
        className={styles.button}
        onClick={() => {
          Fathom.trackGoal(id, 0);
        }}
      >
        {children}
      </a>
    </Link>
  );
};
