import { ErrorMessage, Field } from "formik";
import styles from "../../pages/SignUpPage/SignUpPage.module.scss";

const InputWithError = (props) => {
  const { name, ...restProps } = props;
  return (
    <div className={styles.fieldSection}>
      <Field className={styles.input} name={name} {...restProps} />
      <ErrorMessage name={name} className={styles.errorMsg} component="p" />
    </div>
  );
};

export default InputWithError;
