import Products from "../Products/Products";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";

function Home() {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Eslint bug
    //eslint-disable-next-line
    setIsLoading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setMenu(data.categories);
        console.log(data.categories);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return <main>{isLoading ? <Preloader /> : <Products menu={menu} />}</main>;
}

export default Home;
