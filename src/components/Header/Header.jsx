import styles from "./Header.module.scss";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

function Header({}) {
  return (
    <header className={styles.header}>
      <div className={styles["header__wrap"]}>
        <Link className={styles["header__title"]} to="/">
          Food
        </Link>
        <Filter />
      </div>
      <Search />
    </header>
  );
}

export default Header;
