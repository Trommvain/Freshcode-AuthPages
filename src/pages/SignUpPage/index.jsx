import React, { Component } from "react";
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

class SignUpPage extends Component {
  state = { ...initialState };

  //for the password confirmation outlines
  passwordConfirmStyle = { outline: "none" };
  passwordValue;

  submitHandler = (e) => {
    const {
      firstName,
      lastName,
      displayName,
      email,
      password,
      passwordConfirm,
      userStatus,
      allowOffers,
    } = this.state;

    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("Passwords don't match!");
      return;
    }

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

    this.setState({ ...initialState });
    this.passwordConfirmStyle = { outline: "none" };
  };

  handleChange = (e) => {
    const {
      target: { value, name, type, checked },
    } = e;

    const newValue = type === "checkbox" ? checked : value;

    if (name === "password") {
      this.passwordValue = value;
    }

    if (name === "passwordConfirm") {
      value === this.passwordValue
        ? (this.passwordConfirmStyle = { outline: "2px solid green" })
        : (this.passwordConfirmStyle = { outline: "2px solid red" });
    }

    const newState = {
      [name]: newValue,
    };
    this.setState(newState);
  };

  render() {
    const {
      firstName,
      lastName,
      displayName,
      email,
      password,
      passwordConfirm,
      userStatus,
      allowOffers,
    } = this.state;

    return (
      <>
        <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
        <p className={styles.commonText}>
          We always keep your name and email address private.
        </p>
        <form onSubmit={this.submitHandler}>
          <section className={styles.inputBlock}>
            <input
              className={styles.input}
              type="text"
              name="firstName"
              placeholder="First name"
              value={firstName}
              onChange={this.handleChange}
              required
            />
            <input
              className={styles.input}
              type="text"
              name="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={this.handleChange}
              required
            />
            <input
              className={styles.input}
              type="text"
              name="displayName"
              placeholder="Display name"
              value={displayName}
              onChange={this.handleChange}
              required
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email adress"
              value={email}
              onChange={this.handleChange}
              required
            />
            <input
              className={styles.input}
              style={this.passwordConfirmStyle}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              required
            />
            <input
              className={styles.input}
              style={this.passwordConfirmStyle}
              type="password"
              name="passwordConfirm"
              placeholder="Password confirmation"
              value={passwordConfirm}
              onChange={this.handleChange}
              required
            />
          </section>
          <label className={styles.radioBtnLbl}>
            <input
              className={styles.radioBtn}
              type="radio"
              name="userStatus"
              value="buyer"
              checked={userStatus === "buyer"}
              onChange={this.handleChange}
            />
            Join As a Buyer
            <p>
              I am looking for a Name, Logo or Tagline for my business, brand or
              product.
            </p>
          </label>
          <label className={styles.radioBtnLbl}>
            <input
              className={styles.radioBtn}
              type="radio"
              name="userStatus"
              value="seller"
              checked={userStatus === "seller"}
              onChange={this.handleChange}
            />
            Join As a Creative or Marketplace Seller
            <p>
              I plan to submit name ideas, Logo designs or sell names in Domain
              Marketplace.
            </p>
          </label>
          <label className={styles.allowOffers}>
            <input
              className={styles.allowCheckbox}
              type="checkbox"
              name="allowOffers"
              checked={allowOffers}
              onChange={this.handleChange}
            />
            Allow Squadhelp to send marketing/promotional offers from time to
            time
          </label>
          <button className={styles.createAccBtn} type="submit">
            CREATE ACCOUNT
          </button>
        </form>
      </>
    );
  }
}

export default SignUpPage;
