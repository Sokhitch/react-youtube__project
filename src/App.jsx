import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Contacts from "./components/Contacts";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setMenu(data.categories);
        console.log(data.categories);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="content">
        <Header />
        <Routes>
          <Route path={"/"} index element={<Home menu={menu} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
