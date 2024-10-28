import styles from "./chip.module.scss";

const Chip = ({ item }) => {
  return (
    <div className={styles.chip}>
      {item.icon}
      {item.label}
    </div>
  );
};

export { Chip };
