import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.credit}>
          View{' '}
          <a
            href="https://github.com/thongster/odin-blog-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </p>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Vietnam Food Adventure
        </p>
      </div>
    </footer>
  );
};

export default Footer;
