"use client";

import React, { useContext } from "react";
import styles from "./toggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const ToggleTheme = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "0px" } : { right: "0px" }}
      />
    </div>
  );
};

export default ToggleTheme;
