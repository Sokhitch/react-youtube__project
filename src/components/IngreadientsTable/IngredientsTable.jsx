import styles from "./IngredientsTable.module.scss";

function IngredientsTable({ recipeObj }) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles["table-head"]}>
          <tr className={styles["table-head__list"]}>
            <th className={styles["table-head__item"]}>Ingredient</th>
            <th className={styles["table-head__item"]}>Measure</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(recipeObj).map(([_key, value], index) => {
            if (_key.includes("strIngredient") && value) {
              return (
                <tr key={index} className={styles["table-head__list"]}>
                  <td className={styles["table-head__item"]}>{value}</td>
                  <td className={styles["table-head__item"]}>
                    {recipeObj[`strMeasure${_key.slice(13)}`]}
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default IngredientsTable;
