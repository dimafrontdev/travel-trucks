import styles from "./filtersSection.module.scss";
import clsx from "clsx";

const FiltersSection = ({ title, value, options = [], onClick }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>

      <div className={styles.options}>
        {options.map((option) => {
          const isSelected =
            typeof value === "object"
              ? !!value[option.key]
              : value === option.value;

          return (
            <div
              key={option.key}
              className={clsx(styles.option, isSelected && styles.active)}
              onClick={() => onClick(option)}
            >
              {option.icon && <span>{option.icon()}</span>}
              <p className={styles.label}>{option.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { FiltersSection };
