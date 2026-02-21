import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import About from "./components/About/About";
import Authors from "./components/Authors/Authors";
import Errorpage from "./components/ErrorPage/Errorpage";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/category/:title"} element={<CategoryPage />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/Authors"} element={<Authors />} />
          <Route path="/404" element={<Errorpage />} />
          <Route path="*" element={<Navigate to={"/404"} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
