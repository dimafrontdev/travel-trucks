import Skeleton from "react-loading-skeleton";
import styles from "./cardListSkeleton.module.scss";
import clsx from "clsx";

const CardListSkeleton = () => {
  return [...Array(4)].map((_, index) => (
    <Skeleton
      key={index}
      containerClassName={clsx(styles.card, styles.skeleton)}
    />
  ));
};

export { CardListSkeleton };
