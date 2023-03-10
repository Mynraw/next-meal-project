import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().required(
    "Please make sure that you enter an valid e-mail."
  ),
  password: Yup.string().required("Password can't be empty."),
});
