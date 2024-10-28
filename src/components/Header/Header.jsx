import styles from "./header.module.scss";
import { IconLogo } from "assets";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang =
      i18n.language === "en" ? "uk" : i18n.language === "uk" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <header
      className={clsx(
        styles.header,
        location.pathname !== "/" && styles.headerGray,
      )}
    >
      <div className={clsx("container", styles.wrapper)}>
        <NavLink to="/">
          <IconLogo />
        </NavLink>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(styles.link, isActive && styles.active)
            }
          >
            {t("home")}
          </NavLink>

          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              clsx(styles.link, isActive && styles.active)
            }
          >
            {t("catalog")}
          </NavLink>
        </nav>

        <button onClick={toggleLanguage} className={styles.languageToggle}>
          {i18n.language === "en" ? "UA" : i18n.language === "uk" ? "FR" : "EN"}
        </button>
      </div>
    </header>
  );
};

export { Header };
