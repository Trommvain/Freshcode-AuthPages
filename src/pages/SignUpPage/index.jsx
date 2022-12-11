import React from "react";
import Header from "../../components/Header";
import SignUpForm from "../../components/SignUpForm";
import styles from "./SignUpPage.module.scss";

function SignUpPage() {
  return (
    <>
      <Header />
      <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
      <p className={styles.commonText}>
        We always keep your name and email address private.
      </p>
      <SignUpForm />
    </>
  );
}

export default SignUpPage;
