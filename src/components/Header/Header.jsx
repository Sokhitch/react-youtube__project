import "./Header.scss";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";

function Header({}) {
  return (
    <header className="header">
      <div className="header__wrap">
        <a className="header__title" href="">
          Food
        </a>
        <Filter />
      </div>
      <Search />
    </header>
  );
}

export default Header;
