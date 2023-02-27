import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string()
    .required("Please make sure that you enter an valid username/e-mail.")
    .min(8, "Your username should be at least 8 characters."),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Password can't be empty."),
});
