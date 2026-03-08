import styles from './PublicSiteLink.module.css';

const PublicSiteLink = ({ url }) => {
  return (
    <section className={styles.wrapper}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        View Public Blog →
      </a>
    </section>
  );
};

export { PublicSiteLink };
