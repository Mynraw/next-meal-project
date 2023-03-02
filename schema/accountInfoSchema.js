import * as Yup from "yup";

export const accountInfoSchema = Yup.object({
  fullName: Yup.string()
    .required("Name can't be empty.")
    .min(5, "Name should be at least 5 or more characters."),
  eMail: Yup.string()
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
  job: Yup.string(),
  bio: Yup.string(),
});
