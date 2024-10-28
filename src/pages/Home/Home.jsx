import styles from "./home.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  buttonVariants,
  subtitleVariants,
  titleVariants,
} from "./animation.js";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className="container">
        <motion.div
          className={styles.home}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1
            className={styles.title}
            variants={titleVariants}
            transition={{ duration: 0.5 }}
          >
            {t("homeTitle")}
          </motion.h1>

          <motion.h2
            className={styles.subtitle}
            variants={subtitleVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("homeSubtitle")}
          </motion.h2>

          <Link to="/catalog">
            <motion.div
              variants={buttonVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button>{t("viewNow")}</Button>
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
