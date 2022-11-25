import React, { Component } from "react";
import styles from "./LogInPage.module.scss";
import passwordHidden from "../../assets/passwordHidden.png";
import passwordShown from "../../assets/passwordShown.png";

const initialState = {
  email: "",
  password: "",
  isRemembered: false,
  isPasswordShown: false,
};

class LogInPage extends Component {
  state = { ...initialState };

  submitHandler = (e) => {
    const { email, password, isRemembered } = this.state;
    e.preventDefault();
    alert(
      `User with email: '${email}' and password: '${password}' has logged in.${
        isRemembered ? "We will remember you!" : ""
      }`
    );
    this.setState({ ...initialState });
  };

  handleChange = (e) => {
    const {
      target: { value, name, type, checked },
    } = e;

    const newValue = type === "checkbox" ? checked : value;

    const newState = {
      [name]: newValue,
    };
    this.setState(newState);
  };

  handlePasswordDisplay = () => {
    const { isPasswordShown } = this.state;
    this.setState({
      isPasswordShown: !isPasswordShown,
    });
  };

  render() {
    const { email, password, isRemembered, isPasswordShown } = this.state;

    return (
      <>
        <h1 className={styles.title}>LOGIN TO YOUR ACCOUNT</h1>
        <form className={styles.form} onSubmit={this.submitHandler}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email adress"
            value={email}
            onChange={this.handleChange}
            required
          />
          <div className={styles.passwordBlock}>
            <input
              className={styles.input}
              type={isPasswordShown ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              required
            />
            <img
              onClick={this.handlePasswordDisplay}
              src={isPasswordShown ? passwordShown : passwordHidden}
              alt="password show/hide icon"
            />
          </div>
          <label>
            <input
              type="checkbox"
              name="isRemembered"
              checked={isRemembered}
              onChange={this.handleChange}
            />
            Remember Me
          </label>
          <button className={styles.loginBtn} type="submit">
            LOGIN
          </button>
        </form>
      </>
    );
  }
}

export default LogInPage;
