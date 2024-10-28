import { BookForm, FeaturesInfo, Rating, Tabs, Reviews } from "components";
import { formatPrice, getTabsOptions } from "utils";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import {
  bookFormVariants,
  descriptionVariants,
  galleryVariants,
  imageVariants,
  priceVariants,
  ratingVariants,
  tabContentVariants,
  titleVariants,
} from "./animations.js";

import styles from "./truckInfo.module.scss";

const TruckInfo = ({ item }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(getTabsOptions(t)[0]);

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const renderTab = () => {
    if (activeTab.key === "features") {
      return <FeaturesInfo item={item} />;
    } else if (activeTab.key === "reviews") {
      return <Reviews reviews={item.reviews} />;
    }
  };

  return (
    <div>
      <motion.h2
        className={styles.name}
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        transition={{ duration: 0.5 }}
      >
        {item.name}
      </motion.h2>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={ratingVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Rating item={item} />
      </motion.div>
      <motion.p
        className={styles.price}
        initial="hidden"
        animate="visible"
        variants={priceVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {formatPrice(item.price)}
      </motion.p>

      <motion.div
        className={styles.gallery}
        initial="hidden"
        animate="visible"
        variants={galleryVariants}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {item.gallery?.map(({ thumb }) => (
          <motion.img
            key={thumb}
            className={styles.image}
            src={thumb}
            alt={item.name}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.3, delay: 0.4 }}
          />
        ))}
      </motion.div>

      <motion.p
        className={styles.description}
        initial="hidden"
        animate="visible"
        variants={descriptionVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {item.description}
      </motion.p>

      <Tabs
        tabs={getTabsOptions(t)}
        onChange={handleTabChange}
        activeTab={activeTab}
      />
      <div className={styles.tabsContent}>
        <div className={styles.left}>
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabContentVariants}
            transition={{ duration: 0.3 }}
          >
            {renderTab()}
          </motion.div>
        </div>

        <motion.div
          className={styles.right}
          initial="hidden"
          animate="visible"
          variants={bookFormVariants}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <BookForm />
        </motion.div>
      </div>
    </div>
  );
};

export { TruckInfo };
