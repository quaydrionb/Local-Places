import React from "react";
import github from "./github-mark.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.Footer}>
        <p>
          {" "}
          2024 |{" "}
          <span>
            <img src={github} height={20} />
          </span>{" "}
          quaydrionb
        </p>
      </footer>
    </div>
  );
};

export default Footer;
