import styles from "@/CommonHeader.module.scss";
import { faBook, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CommonHeader() {
  return (
    <header className={styles.CommonHeader}>
      <div className={styles.Links}>
        <a href="/" className={styles.Link}>
          <div className={styles.LinkIcon}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <span>Profile</span>
        </a>
        <a href="/blog" className={styles.Link}>
          <div className={styles.LinkIcon}>
            <FontAwesomeIcon icon={faBook} />
          </div>
          <span>Blog</span>
        </a>
        <a href="/contact" className={styles.Link}>
          <div className={styles.LinkIcon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <span>Contact</span>
        </a>
      </div>
    </header>
  );
}
