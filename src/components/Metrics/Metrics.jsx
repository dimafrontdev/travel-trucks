import { useTranslation } from "react-i18next";
import styles from "./metrics.module.scss";
import { getMetricOptions } from "utils";

const Metrics = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className={styles.title}>{t("vehicleDetails")}</h3>
      <ul className={styles.metrics}>
        {getMetricOptions(data, t)?.map((el, index) => {
          return (
            <li className={styles.metric} key={index}>
              <p>{el.label}</p>
              <p>{el.value}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Metrics };
