import { IconMap, IconRating } from "assets";
import { useTranslation } from "react-i18next";

import styles from "./rating.module.scss";

const Rating = ({ item }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.subInfo}>
      <IconRating />
      <p className={styles.rating}>
        {t("rating", {
          count: item.rating,
          reviews: item.reviews?.length || 0,
        })}
      </p>

      <div className={styles.location}>
        <IconMap size="16" />
        <p>{item.location}</p>
      </div>
    </div>
  );
};

export { Rating };
