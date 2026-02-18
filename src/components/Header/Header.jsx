import "./Header.scss";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

function Header({}) {
  return (
    <header className="header">
      <div className="header__wrap">
        <Link className="header__title" to="/">
          Food
        </Link>
        <Filter />
      </div>
      <Search />
    </header>
  );
}

export default Header;
