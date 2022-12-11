import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { InputWithError } from "../formFields";
import { LOGIN_SCHEMA } from "../../utils/validators/validationSchemas";
import styles from "./LogInForm.module.scss";
import passwordHidden from "../../assets/passwordHidden.png";
import passwordShown from "../../assets/passwordShown.png";

const initialState = {
  email: "",
  password: "",
  isRemembered: false,
};

function LogInForm() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const submitHandler = (values, formikBag) => {
    const { email, password, isRemembered } = values;
    alert(
      `User with email: '${email}' and password: '${password}' has logged in.${
        isRemembered ? "We will remember you!" : ""
      }`
    );
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={submitHandler}
      validationSchema={LOGIN_SCHEMA}
    >
      <Form className={styles.form}>
        <InputWithError
          inputClassName={styles.input}
          type="email"
          name="email"
          placeholder="Email adress"
        />
        <InputWithError
          inputClassName={styles.input}
          type={isPasswordShown ? "text" : "password"}
          name="password"
          placeholder="Password"
        />
        <img
          className={styles.showPasswordIcon}
          onClick={() => setIsPasswordShown(!isPasswordShown)}
          src={isPasswordShown ? passwordShown : passwordHidden}
          alt="password show/hide icon"
        />
        <label>
          <Field type="checkbox" name="isRemembered" />
          Remember Me
        </label>
        <button className={styles.loginBtn} type="submit">
          LOGIN
        </button>
      </Form>
    </Formik>
  );
}

export default LogInForm;
