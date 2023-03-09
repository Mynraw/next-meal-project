import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters long."),
  email: Yup.string()
    .email("Please enter an valid e-mail address.")
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Should be an valid e-mail adress."
    )
    .required("E-mail address is required."),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Password can't be empty."),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords doesn't match.")
    .required("Password can't be empty."),
});
