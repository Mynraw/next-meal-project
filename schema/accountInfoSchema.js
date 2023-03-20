import * as Yup from "yup";

export const accountInfoSchema = Yup.object({
  fullName: Yup.string()
    .required("Name can't be empty.")
    .min(5, "Name should be at least 5 or more characters."),
  email: Yup.string()
    .email("Please enter an valid e-mail address.")
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Should be an valid e-mail adress."
    )
    .required("E-mail address is required."),
  phoneNumber: Yup.string()
    .required("Phone number can't be empty.")
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      "Phone number should be valid."
    ),
  address: Yup.string()
    .required("Address can't be empty.")
    .min(8, "Please enter an valid address."),
  title: Yup.string(),
  bio: Yup.string(),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Password can't be empty."),
  passwordMatch: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords doesn't match.")
    .required("Password can't be empty."),
  currentPassword: Yup.string().required("Can't be empty."),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/\W/, "Password requires a symbol")
    .required("Password can't be empty."),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords doesn't match.")
    .required("Password can't be empty."),
  location: Yup.string().required("Can't be empty"),
  description: Yup.string().required("Can't be empty"),
  availableDays: Yup.string().required("Can't be empty"),
  openingHours: Yup.string().required("Can't be empty"),
  link: Yup.string().required("Can't be empty"),
});
