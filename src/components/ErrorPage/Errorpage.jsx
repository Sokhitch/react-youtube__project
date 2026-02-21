import styles from "./Errorpage.module.scss";

function Errorpage() {
  return (
    <div className="errorPage">
      <div className="container">
        <p className={styles.Errorpage}>404: NOT_FOUND</p>
        <p className={styles["errorPage__code"]}>This Page doesn't exist</p>
      </div>
    </div>
  );
}

export default Errorpage;
