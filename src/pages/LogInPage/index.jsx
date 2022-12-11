import React from "react";
import Header from "../../components/Header";
import LogInForm from "../../components/LogInForm";
import styles from "./LogInPage.module.scss";

function LogInPage() {
  return (
    <>
      <Header />
      <h1 className={styles.title}>LOGIN TO YOUR ACCOUNT</h1>
      <LogInForm />
    </>
  );
}

export default LogInPage;
