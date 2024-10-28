import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./datePicker.module.scss";
import { useField } from "formik";

import "../../scss/overrides.scss";

const DateInput = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleChange = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    helpers.setValue(`${month}/${day}/${year}`);
  };

  return (
    <div className={styles.fieldWrapper}>
      <DatePicker
        {...props}
        value={field.value}
        onChange={handleChange}
        minDate={new Date()}
        dateFormat="mm/dd/yyyy"
        autoComplete="off"
        placeholderText={props.placeholder}
        className={styles.datePicker}
      />
      {meta.touched && meta.error && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};

export { DateInput };
