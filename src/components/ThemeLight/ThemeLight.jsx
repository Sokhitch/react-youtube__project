import React from "react";
import styles from "./ThemeLight.module.scss";

function ThemeLight() {
  return (
    <div>
      <img
        name="light"
        width="20"
        height="20"
        className={styles.icon}
        src="/sun.svg"
        alt="SUN"
      />
    </div>
  );
}

export default ThemeLight;
