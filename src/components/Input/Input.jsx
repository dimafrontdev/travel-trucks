import styles from "./input.module.scss";
import { useField } from "formik";

const Input = ({ type, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className={styles.inputWrapper}>
        {type === "textarea" ? (
          <textarea
            name={props.name}
            id={props.name}
            {...props}
            {...field}
            className={styles.textarea}
          />
        ) : (
          <input
            name={props.name}
            id={props.name}
            {...props}
            {...field}
            className={styles.input}
          />
        )}

        {meta.touched && meta.error && (
          <div className={styles.error}>{meta.error}</div>
        )}
      </div>
    </>
  );
};

export { Input };
