import styles from "./Footer.module.scss";

function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles["footer__wrap"]}>
          <p>© {getYear()} Copyright Text</p>
          <a
            className={styles["footer__link"]}
            href="https://t.me/egor_frontend_dev"
          >
            https://t.me/ndwmnt
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
