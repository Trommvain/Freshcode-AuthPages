import { Field, Form, Formik } from "formik";
import { InputWithError, RadioButton } from "../formFields";
import { SIGN_UP_SCHEMA } from "../../utils/validators/validationSchemas";
import styles from "./SignUpForm.module.scss";

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

function SignUpForm() {
  return (
    <Formik
      initialValues={initialState}
      onSubmit={submitHandler}
      validationSchema={SIGN_UP_SCHEMA}
    >
      <Form className={styles.form}>
        <section className={styles.inputBlock}>
          <InputWithError name="firstName" placeholder="First name" />
          <InputWithError name="lastName" placeholder="Last name" />
          <InputWithError name="displayName" placeholder="Display name" />
          <InputWithError name="email" placeholder="Email adress" />
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

        <RadioButton
          name="userStatus"
          value="buyer"
          text="Join As a Buyer"
          description="I am looking for a Name, Logo or Tagline for my business, brand or
          product."
        />

        <RadioButton
          name="userStatus"
          value="seller"
          text="Join As a Creative or Marketplace Seller"
          description="I plan to submit name ideas, Logo designs or sell names in Domain
          Marketplace."
        />

        <div className={styles.allowOffersContainer}>
          <Field
            className={styles.allowCheckbox}
            type="checkbox"
            name="allowOffers"
          />
          <label className={styles.allowOffers}>
            Allow Squadhelp to send marketing/promotional offers from time to
            time
          </label>
        </div>
        <button className={styles.createAccBtn} type="submit">
          CREATE ACCOUNT
        </button>
      </Form>
    </Formik>
  );
}

export default SignUpForm;
