import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}></div>
      <div className={styles.credit}>
        <p>
          View{' '}
          <a href="https://github.com/thongster/odin-shopping-cart">
            Source Code
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
