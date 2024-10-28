import styles from "./featuresInfo.module.scss";
import { Features, Metrics } from "components";

const FeaturesInfo = ({ item }) => {
  return (
    <div className={styles.featuresInfo}>
      <Features data={item} />
      <Metrics data={item} />
    </div>
  );
};

export { FeaturesInfo };
