import { Link } from "react-router-dom";
import styles from "./Filter.module.scss";

function Filter({}) {
  return (
    <nav className={styles["header__navigation"]}>
      <ul className={styles["header-nav__list"]}>
        <li className={styles["header-nav__item"]}>
          <Link to={"/about"}>About</Link>
        </li>
        <li className={styles["header-nav__item"]}>
          <Link to="/Contacts">Contacts</Link>
        </li>
        <li className={styles["header-nav__item"]}>
          <Link to="/Authors">Authors</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Filter;
