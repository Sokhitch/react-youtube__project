import { useState } from "react";
import styles from "./Search.module.scss";

function Search({ handleSearch }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["header-form"]}>
      <div className={styles.container}>
        <input
          value={inputValue}
          onChange={(evt) => {
            setInputValue(evt.target.value);
          }}
          name="search"
          className={styles["header-form__input"]}
          type="text"
          placeholder="search"
        />
        <button className={styles["header-form__btn"]}>Search...</button>
      </div>
      <div className={styles["header-form__line"]}></div>
    </form>
  );
}

export default Search;
