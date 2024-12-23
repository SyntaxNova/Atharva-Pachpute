import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/ppa.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineer</h3>
              <p>
              I build scalable applications using Java and OOP principles, ensuring efficiency and performance.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
              I develop web solutions using the MERN stack, delivering seamless and responsive user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ps.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solver</h3>
              <p>
              I apply Data Structures & Algorithms expertise to develop optimized solutions for complex challenges.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
