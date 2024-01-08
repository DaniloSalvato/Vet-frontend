import { useState } from "react";
import styles from "./styles.module.css";

function Header() {
  const [active, setActive] = useState(styles.menu);
  const [togglerIcon, setToggleIcon] = useState(styles.navToggler);

  const navToggle = () => {
    active === styles.menu
      ? setActive(`${styles.menu} ${styles.active}`)
      : setActive(styles.menu);

    togglerIcon === styles.navToggler
      ? setToggleIcon(`${styles.navToggler} ${styles.toggle}`)
      : setToggleIcon(styles.navToggler);
  };

  return (
    <>
      <header>
        <nav className={styles.nav}>
          <a className={styles.brand} href="brand">
            Little Paw
          </a>
          <ul className={active}>
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
          <div onClick={navToggle} className={togglerIcon}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
          <div>
            <button className={styles.loginButton}>
              <a href="#">Login</a>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
