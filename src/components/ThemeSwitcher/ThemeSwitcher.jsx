import React, { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";
import ThemeDark from "../ThemeDark/ThemeDark";
import ThemeLight from "../ThemeLight/ThemeLight";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");
  const ThemeIcon = theme === "dark" ? <ThemeDark /> : <ThemeLight />;
  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className={styles.themeSwitcher}>
      <button onClick={() => handleChange()} className={styles.btn}>
        {theme.toUpperCase()}
        {ThemeIcon}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
