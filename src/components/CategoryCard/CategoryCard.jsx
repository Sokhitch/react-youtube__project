import { Link } from "react-router-dom";
import styles from "./CategoryCard.module.scss";

function CategoryCard({ title, id, images }) {
  return (
    <article className={styles.categoryСard}>
      <img className={styles["categoryСard__img"]} src={images} alt={"title"} />
      <p className={styles["categoryСard__title"]}>{title}</p>
      <div className={styles["categoryСard__wrapper"]}>
        <Link className={styles["categoryСard__link"]} to="/watch categories">
          WATCH RECIPE
        </Link>
      </div>
    </article>
  );
}

export default CategoryCard;
