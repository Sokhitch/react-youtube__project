import CategoryCards from "../CategoryCards/CategoryCards";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import "./CategoryPage.scss";
import { useNavigate, useParams } from "react-router-dom";

function CategoryPage() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { title } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals);
        setIsLoading(false);
      });
  }, []);
  return (
    <main>
      <button onClick={() => navigate("/")}>Go back</button>
      {isLoading ? <Preloader /> : <CategoryCards meals={meals} />}
    </main>
  );
}

export default CategoryPage;
