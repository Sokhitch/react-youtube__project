import { useEffect, useState } from "react";
import styles from "./MealDetails.module.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import MealRecipe from "../MealRecipe/MealRecipe";
import Preloader from "../Preloader/Preloader";

function MealDetails() {
  const [recipe, setRecipe] = useState([]);
  const { title } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${title}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data.recipe);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="container">
      <button className={styles["goBack-Btn"]} onClick={() => navigate(-1)}>
        Go Back
      </button>
      {isLoading ? <Preloader /> : <MealRecipe recipe={recipe} />}
    </main>
  );
}

export default MealDetails;
