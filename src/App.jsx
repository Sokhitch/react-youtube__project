import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setMenu(data.categories);
      });
  }, []);

  return (
    <div className="content">
      <Header />
      <Main menu={menu} />
      <Footer />
    </div>
  );
}

export default App;
