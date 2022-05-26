import Image from "next/image";
import { useEffect } from "react";

import crest from "../public/crests/hamburg.png";
import styles from "../styles/Logo.module.css";

export const Logo = () => {
  const handleOrientation = (event: DeviceOrientationEvent) => {
    console.log(event);
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientation, true);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation, true);
    };
  }, []);

  return (
    <div className={styles.logo}>
      <Image
        priority
        src={crest}
        alt="Hamburg GAA crest"
        width="400"
        height="373"
      />
    </div>
  );
};
