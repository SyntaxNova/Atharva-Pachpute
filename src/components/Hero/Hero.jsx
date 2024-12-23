import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Atharva</h1>
        <p className={styles.description}>
        IT Engineering student skilled in Java, DSA, MERN stack, and Machine Learning. Actively seeking opportunities to create impactful solutions and grow in the tech industry.
        </p>
        <a href="mailto:atharvapachpute5@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/pp.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
