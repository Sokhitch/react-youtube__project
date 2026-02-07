import "./Search.scss";

function Search() {
  return (
    <form className="header-form">
      <input className="header-form__input" type="text" placeholder="search" />
      <button className="header-form__btn">Search...</button>
      <div className="header-form__line"></div>
    </form>
  );
}

export default Search;
