import React, { useState } from "react";
import styles from "./LogInPage.module.scss";
import passwordHidden from "../../assets/passwordHidden.png";
import passwordShown from "../../assets/passwordShown.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { LOGIN_SCHEMA } from "../../utils/validators/validationSchemas";

const initialState = {
  email: "",
  password: "",
  isRemembered: false,
};

function LogInPage() {
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
    <>
      <h1 className={styles.title}>LOGIN TO YOUR ACCOUNT</h1>
      <Formik
        initialValues={initialState}
        onSubmit={submitHandler}
        validationSchema={LOGIN_SCHEMA}
      >
        <Form className={styles.form}>
          <section className={styles.fieldSection}>
            <Field
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email adress"
            />
            <ErrorMessage
              name="email"
              component="p"
              className={styles.errorMsg}
            />
          </section>
          <div>
            <Field
              className={styles.input}
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
            <ErrorMessage
              name="password"
              component="p"
              className={styles.errorMsgSpecial}
            />
          </div>
          <label>
            <Field type="checkbox" name="isRemembered" />
            Remember Me
          </label>
          <button className={styles.loginBtn} type="submit">
            LOGIN
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default LogInPage;
