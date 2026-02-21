import { Link } from "react-router-dom";
import styles from "./Product.module.scss";

function Product({ category, description, title, images, id }) {
  return (
    <article className={styles["product-card"]}>
      <img className={styles["product__picture"]} src={images} alt={title} />
      <p className={styles["product-card__title"]}>{title}</p>
      <p className={styles["product-card__desc"]}>
        {description.slice(0, 60)}...
      </p>
      <div className={styles.wrapper}>
        <p className={styles["product-card__category"]}>{category}</p>
        <Link
          className={styles["product-card__link"]}
          to={`/category/${title}`}
        >
          WATCH CATEGORY
        </Link>
      </div>
    </article>
  );
}

export default Product;
