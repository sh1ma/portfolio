import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TweetCard.module.scss";
import {
  faComment,
  faHeart,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

type TweetCardProps = {
  name: string;
  userId: string;
  text: string;
  date?: string;
  extraUrls?: string[];
};

export function TweetCard({
  name,
  userId,
  text,
  date,
  extraUrls,
}: TweetCardProps) {
  const dateText = date ? date : "1分前";

  return (
    <article className={styles.TweetCard}>
      <div className={styles.Container}>
        <div className={styles.TweetCardIcon} />
        <div className={styles.TweetContent}>
          <header className={styles.TweetCardHeader}>
            <div>
              <span className={styles.TweetCardName}>{name}</span>
              <span className={styles.TweetCardId}>@{userId}</span>
              <span className={styles.TweetCardDate}>・ {dateText}</span>
            </div>
          </header>
          <div className={styles.TweetCardBody}>
            <span>{text}</span>
            {extraUrls &&
              extraUrls.map((url, i) => (
                <a
                  className={styles.TweetTextLink}
                  key={i}
                  href={url}
                  target="_blank"
                >
                  {url}
                </a>
              ))}
          </div>
          <footer className={styles.ReactionMenu}>
            <div className={styles.ReactionMenuItem}>
              <span>
                <FontAwesomeIcon icon={faComment} />
              </span>
            </div>
            <span>
              <FontAwesomeIcon icon={faRetweet} />
            </span>
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span>
              <FontAwesomeIcon icon={faShareFromSquare} />
            </span>
          </footer>
        </div>
      </div>
    </article>
  );
}
