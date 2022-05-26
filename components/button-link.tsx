import Link, { LinkProps } from "next/link";

import styles from "../styles/ButtonLink.module.css";

export const ButtonLink: React.FC<
  LinkProps & { children: React.ReactNode }
> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={styles.button}>{children}</a>
    </Link>
  );
};
