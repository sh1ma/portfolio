import styles from "@/About.module.scss";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faLink, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { TweetCard } from "@/components/TweetCard/TweetCard";
import tweetsJson from "@/assets/tweets.json";

const getTweets = (category: TweetCategory) => {
  const allTweets = tweetsJson.data.tweets as Tweet[];
  const introductionTweets = allTweets.filter((tweet) => {
    return tweet.category === category;
  });

  return introductionTweets;
};

export function About() {
  const [introductionTweets] = useState<Tweet[]>(() =>
    getTweets("Introduction")
  );
  const [careerTweets] = useState<Tweet[]>(() => getTweets("Career").reverse());
  const [skillsTweets] = useState<Tweet[]>(() => getTweets("Skills"));
  const [worksTweets] = useState<Tweet[]>(() => getTweets("Works"));

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
                    <a
                      target="_blank"
                      href="https://github.com/sh1ma"
                      className={styles.FactorLinkText}
                    >
                      https://github.com/sh1ma
                    </a>
                  </div>
                  <div className={styles.Factor}>
                    <div className={styles.FactorIcon}>
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                    <span>Programmer since 2013</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tabs onSelect={(i) => setN(i)}>
            <TabList className={styles.Categories}>
              <div
                className={styles.RuledLine}
                style={{ left: `calc(100% * ${n} / 4)` }}
              />
              <Tab className={styles.CategoryLink}>
                <span>Introduction</span>
              </Tab>
              <Tab className={styles.CategoryLink}>
                <span>Career</span>
              </Tab>
              <Tab className={styles.CategoryLink}>
                <span>Skills</span>
              </Tab>
              <Tab className={styles.CategoryLink}>
                <span>Works</span>
              </Tab>
            </TabList>
            <TabPanel>
              <ol>
                {introductionTweets.map((tweet, i) => {
                  return (
                    <li key={i}>
                      <TweetCard
                        name="sh1ma"
                        userId="sh1ma"
                        text={tweet.text}
                      />
                    </li>
                  );
                })}
              </ol>
            </TabPanel>

            <TabPanel>
              <ol>
                {careerTweets.map((tweet, i) => {
                  return (
                    <li key={i}>
                      <TweetCard
                        name="sh1ma"
                        userId="sh1ma"
                        text={tweet.text}
                        date={tweet.date}
                      />
                    </li>
                  );
                })}
              </ol>
            </TabPanel>
            <TabPanel>
              <ol>
                {skillsTweets.map((tweet, i) => {
                  return (
                    <li key={i}>
                      <TweetCard
                        name="sh1ma"
                        userId="sh1ma"
                        text={tweet.text}
                        date={tweet.date}
                      />
                    </li>
                  );
                })}
              </ol>
            </TabPanel>
            <TabPanel>
              <ol>
                {worksTweets.map((tweet, i) => {
                  return (
                    <li key={i}>
                      <TweetCard
                        name="sh1ma"
                        userId="sh1ma"
                        text={tweet.text}
                        date={tweet.date}
                        extraUrls={tweet.extraUrls}
                      />
                    </li>
                  );
                })}
              </ol>
            </TabPanel>
          </Tabs>
          <div className={styles.Tweets}></div>
        </div>
      </main>
      <nav className={styles.NavBox}></nav>
    </div>
  );
}
