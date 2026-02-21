import styles from "./Search.module.scss";

function Search() {
  return (
    <form className={styles["header-form"]}>
      <input
        className={styles["header-form__input"]}
        type="text"
        placeholder="search"
      />
      <button className={styles["header-form__btn"]}>Search...</button>
      <div className={styles["header-form__line"]}></div>
    </form>
  );
}

export default Search;
