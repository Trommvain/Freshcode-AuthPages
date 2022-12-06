import * as yup from "yup";

const EMAIL_SCHEMA = yup
  .string()
  .email("Must be valid email")
  .required("Fill in this field");

const NAME_SCHEMA = yup
  .string()
  .min(1, "Name must have at least 1 letter")
  .required("Fill in this field");

const PASSWORD_SCHEMA = yup
  .string()
  .min(8, "Password must me at least 8 symbol")
  .required("Password is required");

export const SIGN_UP_SCHEMA = yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  passwordConfirm: yup
    .string()
    .when("password", (password, field) =>
      password
        ? field
            .required("Confirm your password")
            .oneOf([yup.ref("password")], "Password doesn't match")
        : field
    ),
  userStatus: yup.string().required(),
  allowOffers: yup.bool(),
});

export const LOGIN_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});
