import { Field, Form, Formik } from "formik";
import React from "react";
import InputWithError from "../../components/InputWithError";
import { SIGN_UP_SCHEMA } from "../../utils/validators/validationSchemas";
import styles from "./SignUpPage.module.scss";

const initialState = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  password: "",
  passwordConfirm: "",
  userStatus: "buyer",
  allowOffers: false,
};

function SignUpPage() {
  const submitHandler = (values, formikBag) => {
    const {
      firstName,
      lastName,
      displayName,
      email,
      password,
      userStatus,
      allowOffers,
    } = values;

    alert(
      `Created account:
      First name: ${firstName}
      Last name: ${lastName}
      Display name: ${displayName}
      Email: ${email}
      Password: ${password}
      Status: ${userStatus === "buyer" ? "Buyer" : "Seller"}
      Offers: ${allowOffers ? "Allowed" : "Not allowed"}`
    );

    formikBag.resetForm();
  };

  return (
    <>
      <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
      <p className={styles.commonText}>
        We always keep your name and email address private.
      </p>
      <Formik
        initialValues={initialState}
        onSubmit={submitHandler}
        validationSchema={SIGN_UP_SCHEMA}
      >
        <Form>
          <section className={styles.inputBlock}>
            <InputWithError
              type="text"
              name="firstName"
              placeholder="First name"
            />

            <InputWithError
              type="text"
              name="lastName"
              placeholder="Last name"
            />

            <InputWithError
              type="text"
              name="displayName"
              placeholder="Display name"
            />

            <InputWithError
              type="text"
              name="email"
              placeholder="Email adress"
            />

            <InputWithError
              type="password"
              name="password"
              placeholder="Password"
            />

            <InputWithError
              type="password"
              name="passwordConfirm"
              placeholder="Password confirmation"
            />
          </section>

          <label className={styles.radioBtnLbl}>
            <Field
              className={styles.radioBtn}
              type="radio"
              name="userStatus"
              value="buyer"
            />
            Join As a Buyer
            <p>
              I am looking for a Name, Logo or Tagline for my business, brand or
              product.
            </p>
          </label>
          <label className={styles.radioBtnLbl}>
            <Field
              className={styles.radioBtn}
              type="radio"
              name="userStatus"
              value="seller"
            />
            Join As a Creative or Marketplace Seller
            <p>
              I plan to submit name ideas, Logo designs or sell names in Domain
              Marketplace.
            </p>
          </label>
          <label className={styles.allowOffers}>
            <Field
              className={styles.allowCheckbox}
              type="checkbox"
              name="allowOffers"
            />
            Allow Squadhelp to send marketing/promotional offers from time to
            time
          </label>
          <button className={styles.createAccBtn} type="submit">
            CREATE ACCOUNT
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default SignUpPage;
