import "./Filter.scss";

function Filter({}) {
  return (
    <nav className="header__navigation">
      <ul className="header-nav__list">
        <li className="header-nav__item">
          <a href="/about">About</a>
        </li>
        <li className="header-nav__item">
          <a href="/Contacts">Contacts</a>
        </li>
        <li className="header-nav__item">
          <a href="/Authors">Authors</a>
        </li>
      </ul>
    </nav>
  );
}

export default Filter;
