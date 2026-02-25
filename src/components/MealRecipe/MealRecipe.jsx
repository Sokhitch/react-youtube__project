import MealIngredients from "../MealIngredients/MealIngredients";
import styles from "./MealRecipe.module.scss";
import Errorpage from "../ErrorPage/Errorpage";

function MealRecipe({ recipe }) {
  return (
    <section className={styles.meal}>
      <div className="container">
        <div className={styles["meal-card__wrap"]}>
          {recipe ? (
            recipe.map((element, index) => {
              return (
                <MealIngredients
                  key={index}
                  title={element.strMeal}
                  id={element.idMeal}
                  images={element.strMealThumb}
                  desc={element.strInstructions}
                  country={element.strArea}
                  category={element.strCategory}
                />
              );
            })
          ) : (
            <Errorpage />
          )}
        </div>
      </div>
    </section>
  );
}

export default MealRecipe;
