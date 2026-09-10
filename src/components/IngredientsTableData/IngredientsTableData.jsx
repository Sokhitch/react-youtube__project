import IngredientsTable from "../IngreadientsTable/IngredientsTable";
import styles from "./IngredientsTableData.module.scss";
import Errorpage from "../ErrorPage/Errorpage";

function IngredientsTableData({ recipe }) {
  return (
    <div className={styles.container}>
      <div className={styles["meal-card__wrap"]}>
        {recipe[0] ? <IngredientsTable recipeObj={recipe[0]} /> : <Errorpage />}
      </div>
    </div>
  );
}

export default IngredientsTableData;
