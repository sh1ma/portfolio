import styles from "@/About.module.scss";
import {
  faComputer,
  faLink,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function About() {
  const [n, setN] = useState(0);
  return (
    <div className={styles.Container}>
      <main className={styles.AboutBox}>
        <header className={styles.AboutHeader}>sh1ma.dev</header>
        <div className={styles.AboutBody}>
          <div className={styles.Profile}>
            <div className={styles.HeaderImage} />
            <div className={styles.ProfileBody}>
              <span className={styles.ProfileIcon} />
              <div className={styles.ProfileTexts}>
                <div className={styles.ProfileName}>
                  <span>sh1ma</span>
                </div>
                <div className={styles.ProfileId}>
                  <span>@sh1ma</span>
                </div>
                <div className={styles.ProfileBio}>
                  <span>
                    A programmer who loves ( VRChat | Coffee | Kawaii Future
                    Bass )
                  </span>
                </div>
                <div className={styles.ProfileFactors}>
                  <div className={styles.Factor}>
                    <div className={styles.FactorIcon}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <span>Kanagawa, Japan</span>
                  </div>
                  <div className={styles.Factor}>
                    <div className={styles.FactorIcon}>
                      <FontAwesomeIcon icon={faLink} />
                    </div>
                    <span className={styles.FactorLinkText}>
                      https://github.com/sh1ma
                    </span>
                  </div>
                  <div className={styles.Factor}>
                    <div className={styles.FactorIcon}>
                      <FontAwesomeIcon icon={faComputer} />
                    </div>
                    <span>Programmer since 2013</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Categories}>
            <div
              className={styles.RuledLine}
              style={{ left: `calc(100% * ${n} / 4)` }}
            />
            <button className={styles.CategoryLink} onClick={() => setN(0)}>
              <span>Introduction</span>
            </button>
            <button className={styles.CategoryLink} onClick={() => setN(1)}>
              <span>Career</span>
            </button>
            <button className={styles.CategoryLink} onClick={() => setN(2)}>
              <span>Skills</span>
            </button>
            <button className={styles.CategoryLink} onClick={() => setN(3)}>
              <span>Works</span>
            </button>
          </div>
          <div className={styles.Tweets}></div>
        </div>
      </main>
      <nav className={styles.NavBox}></nav>
    </div>
  );
}
