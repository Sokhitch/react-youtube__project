import { useEffect, useState } from "react";
import styles from "./MealDetails.module.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import MealRecipe from "../MealRecipe/MealRecipe";
import Preloader from "../Preloader/Preloader";

function MealDetails() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Eslint bug
    //eslint-disable-next-line
    setIsLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data.meals || []);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
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
