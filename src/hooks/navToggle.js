const navToggle = (
  active,
  setActive,
  togglerIcon,
  setToggleIcon,
  { styles }
) => {
  active === styles.menu
    ? setActive(`${styles.menu} ${styles.active}`)
    : setActive(styles.menu);

  togglerIcon === styles.navToggler
    ? setToggleIcon(`${styles.navToggler} ${styles.toggle}`)
    : setToggleIcon(styles.navToggler);
};

export default navToggle;
