import * as Yup from "yup";

export const resSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name must be at least 3 characters."),
  phoneNumber: Yup.string()
    .required("Phone number can't be empty.")
    .min(9, "Phone number must be 9 characters or higher"),
  eMail: Yup.string()
    .email("Must be a valid E-Mail.")
    .required("E-Mail address can't be empty."),
  resCount: Yup.number()
    .max(8, "Can't be more than 8 person")
    .required("Number of persons can't be empty."),
  resDate: Yup.date().required("Date can't be empty."),
});
