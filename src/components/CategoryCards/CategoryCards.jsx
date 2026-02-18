import styles from "./CategoryCards.module.scss";
import CategoryCard from "../CategoryCard/CategoryCard";

function CategoryCards({ meals }) {
  return (
    <section className={styles.meals}>
      <div className="container">
        <div className={styles["meals-card__wrap"]}>
          {meals ? (
            meals.map((element, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={element.strMeal}
                  id={element.idMeal}
                  images={element.strMealThumb}
                />
              );
            })
          ) : (
            <h2>Ничего не найдено</h2>
          )}
        </div>
      </div>
    </section>
  );
}

export default CategoryCards;
