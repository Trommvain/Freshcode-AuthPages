import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/squadhelp-logo.png";

function Header() {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <a href="https://www.squadhelp.com/">
        <img className={styles.logoPic} src={logo} alt="site logo" />
      </a>
      <button className={styles.authBtn}>
        <Link
          className={styles.link}
          to={pathname === "/login" ? "/signup" : "/login"}
        >
          {pathname === "/login" ? "SIGNUP" : "LOGIN"}
        </Link>
      </button>
    </header>
  );
}

export default Header;
