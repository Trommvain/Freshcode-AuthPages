import { ErrorMessage, Field } from "formik";
import styles from "./formFields.module.scss";

export const InputWithError = (props) => {
  const {
    name,
    type = "text",
    inputClassName = styles.input,
    ...restProps
  } = props;
  return (
    <div className={styles.fieldSection}>
      <Field
        className={inputClassName}
        name={name}
        type={type}
        {...restProps}
      />
      <ErrorMessage name={name} className={styles.errorMsg} component="p" />
    </div>
  );
};

export const RadioButton = (props) => {
  const { name, value, text, description } = props;
  return (
    <label className={styles.radioBtnLbl}>
      <Field
        className={styles.radioBtn}
        type="radio"
        name={name}
        value={value}
      />
      {text}
      <p>{description}</p>
    </label>
  );
};
