import React from "react";
import styles from "./ThemeDark.module.scss";

function ThemeDark() {
  return (
    <div>
      <img
        name="dark"
        width="20"
        height="20"
        className={styles.icon}
        src="public/moon.svg"
        alt="Moon"
      />
    </div>
  );
}

export default ThemeDark;
