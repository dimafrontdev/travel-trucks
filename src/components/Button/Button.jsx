import styles from "./button.module.scss";
import clsx from "clsx";

const Button = ({ color = "primary", children, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        styles.button,
        color === "primary" ? styles.primary : styles.secondary,
        props.className ?? "",
      )}
    >
      {children}
    </button>
  );
};

export { Button };
