import styles from "./card.module.scss";
import { formatPrice } from "utils";
import { IconFavorite } from "assets";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Button, Features, Rating } from "components";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "src/redux";
import { useCallback } from "react";
import { Link } from "react-router-dom";

const Card = ({ item, isFavorite = false }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleFavorite = useCallback(() => {
    if (isFavorite) {
      dispatch(removeFavorite(item.id));
    } else {
      dispatch(addFavorite(item.id));
    }
  }, [dispatch, isFavorite, item.id]);

  return (
    <div className={styles.card}>
      <img
        alt={item.name}
        src={item.gallery[0].thumb}
        className={styles.image}
      />

      <div className={styles.cardContent}>
        <div className={styles.header}>
          <h2 className={styles.name}>{item.name}</h2>

          <div className={styles.left}>
            <p className={styles.price}>{formatPrice(item.price)}</p>
            <IconFavorite
              className={clsx(styles.favorite, isFavorite && styles.active)}
              onClick={handleFavorite}
            />
          </div>
        </div>

        <Rating item={item} />

        <p className={styles.description}>{item.description}</p>

        <Features data={item} />

        <Link to={`/catalog/${item.id}`}>
          <Button className={styles.button}>{t("showMore")}</Button>
        </Link>
      </div>
    </div>
  );
};

export { Card };
