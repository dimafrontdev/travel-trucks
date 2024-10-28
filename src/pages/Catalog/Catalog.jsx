import styles from "./catalog.module.scss";
import { CardList, Filters } from "components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCampers, resetCatalog } from "src/redux";
import { resetFilters } from "src/redux/filters/index.js";
import { motion } from "framer-motion";
import { cardListVariants, filtersVariants } from "./animations.js";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({}));

    return () => {
      dispatch(resetCatalog());
      dispatch(resetFilters());
    };
  }, [dispatch]);

  return (
    <div className="container">
      <section className={styles.catalog}>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={filtersVariants}
        >
          <Filters />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={cardListVariants}
        >
          <CardList />
        </motion.div>
      </section>
    </div>
  );
};

export default Catalog;
