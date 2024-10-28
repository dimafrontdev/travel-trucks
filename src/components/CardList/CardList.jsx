import styles from "./cardList.module.scss";
import { Button, Card, CardListSkeleton, Loader } from "components";
import {
  fetchCampers,
  resetFilters,
  selectCampers,
  selectFavorites,
  selectLoading,
  selectPage,
  selectTotal,
} from "src/redux";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { PER_PAGE } from "../../const/index.js";

const CardList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);
  const favorites = useSelector(selectFavorites);

  const handleResetFilters = useCallback(() => {
    dispatch(resetFilters());
    dispatch(fetchCampers());
  }, [dispatch]);

  const showLoadMore = useMemo(
    () => campers.length > 0 && page < Math.ceil(total / PER_PAGE),
    [campers.length, page, total],
  );

  const handleLoadMore = useCallback(() => {
    dispatch(fetchCampers({ page: page + 1 }));
  }, [dispatch, page]);

  return (
    <div className={styles.list}>
      {loading && campers.length === 0 && <CardListSkeleton />}
      {campers.map((item) => {
        const isFavorite = favorites.includes(item.id);
        return <Card item={item} key={item.id} isFavorite={isFavorite} />;
      })}

      {loading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}

      {!loading && campers.length === 0 && (
        <div className={styles.noResults}>
          <p>{t("noResults")}</p>
          <Button color="secondary" onClick={handleResetFilters}>
            {t("resetFilters")}
          </Button>
        </div>
      )}

      {showLoadMore && (
        <div className={styles.loadMore}>
          <Button color="secondary" onClick={handleLoadMore}>
            {t("loadMore")}
          </Button>
        </div>
      )}
    </div>
  );
};

export { CardList };
