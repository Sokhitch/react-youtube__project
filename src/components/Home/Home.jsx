import Products from "../Products/Products";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import Search from "../Search/Search";

function Home() {
  const [menu, setMenu] = useState([]);
  const [filterMenu, setFilterMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (searchString) => {
    setFilterMenu(
      menu.filter((el) =>
        el.strCategory
          .toLowerCase()
          .trim()
          .includes(searchString.toLowerCase().trim()),
      ),
    );
  };

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
  return (
    <main>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Search handleSearch={handleSearch} />
          <Products menu={filterMenu.length > 0 ? filterMenu : menu} />
        </>
      )}
    </main>
  );
}

export default Home;
