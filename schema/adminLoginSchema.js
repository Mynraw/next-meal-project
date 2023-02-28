import * as Yup from "yup";

export const adminLoginSchema = Yup.object({
  username: Yup.string().required(
    "Please make sure that you enter an valid username/e-mail."
  ),
  password: Yup.string().required("Password can't be empty."),
});
