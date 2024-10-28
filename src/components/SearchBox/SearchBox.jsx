import styles from "../Input/input.module.scss";

const SearchBox = ({ label, icon, ...props }) => {
  return (
    <div>
      {label && (
        <label htmlFor={props.name} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.inputWrapper}>
        <input
          name={props.name}
          id={props.name}
          {...props}
          className={styles.input}
        />
        {icon && <div className={styles.icon}>{icon}</div>}
      </div>
    </div>
  );
};

export { SearchBox };
