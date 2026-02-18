import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CategoryPage from "./components/CategoryPage/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/category/:title"} element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
