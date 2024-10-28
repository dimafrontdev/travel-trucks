import { useTranslation } from "react-i18next";

import styles from "./notFound.module.scss";
import clsx from "clsx";
import { Button } from "components";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className={clsx(styles.notFound, "container")}>
      <p>{t("notFound")}</p>
      <Link to="/">
        <Button color="secondary" className={styles.goHome}>
          {t("returnHome")}
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
