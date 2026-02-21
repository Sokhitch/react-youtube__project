import styles from "./Preloader.module.scss";

function Preloader() {
  return (
    <div className={styles.preloader}>
      <img
        className={styles["preloader-svg"]}
        src="/public/preloader__svg.svg"
        alt="preloader__svg"
      />
      <p className={styles["preloader__text"]}>Loading ...</p>
    </div>
  );
}

export default Preloader;
