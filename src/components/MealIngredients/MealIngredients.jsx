import styles from "./MealIngredients.module.scss";

function MealIngredients({ images, country, id, desc, category, title }) {
  return (
    <article className={styles.ingredientPage}>
      <img className={styles["ingredientPage__img"]} src={images} alt={title} />
      <h2 className={styles["ingredientPage__title"]}>{title}</h2>
      <h3 className={styles["ingredientPage__type"]}>{category}</h3>
      <h4 className={styles["ingredientPage__country"]}>{country}</h4>
      <p className={styles["ingredientPage__desc"]}>{desc}</p>
    </article>
  );
}

export default MealIngredients;
