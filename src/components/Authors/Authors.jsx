import { useNavigate } from "react-router-dom";
import styles from "./Authors.module.scss";

function Authors() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className={styles["hero__wrap"]}>
        <h1 className={styles.hero}>Sokhibbek</h1>
        <button className={styles["hero__link"]}>
          <a
            href="https://t.me/Sokhitch"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Sokhitch
          </a>
        </button>
        <img
          className={styles["hero-favorite__img"]}
          src="public/iceCream.jpg"
          alt="iceCream"
        />
      </div>
      <button className={styles["goBack-btn"]} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default Authors;
