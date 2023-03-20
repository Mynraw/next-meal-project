import Input from "../../components/form/Input";
import { accountInfoSchema } from "../../../schema/accountInfoSchema"
import { useFormik } from "formik";
import axios from "axios";

const Password = ({user}) => {
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, values);
      actions.resetForm();
    } catch (error) {
      console.log(`Here is ur error: ${error}`);
    }
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        // currentPassword: "",
        password: "",
        passwordConfirm: "",
      },
      validationSchema: accountInfoSchema,
      onSubmit,
    });

  const inputsPassword = [
    // {
    //   id: 1,
    //   name: "password",
    //   type: "password",
    //   placeholder: "your current password",
    //   value: values.password,
    //   errormessage: errors.password,
    //   touched: touched.password,
    // },
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "new password",
      value: values.password,
      errormessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "passwordConfirm",
      type: "password",
      placeholder: "confirm new password",
      value: values.passwordConfirm,
      errormessage: errors.passwordConfirm,
      touched: touched.passwordConfirm,
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="my-10">
      <div className="grid grid-cols-2 gap-3.5">
        {inputsPassword.map((input, index) => (
          <Input
            key={input.id}
            addClass={`${
              index === 0 ? "col-span-2" : "col-span-2 md:col-span-1"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            {...input}
          />
        ))}
      </div>
      <button
        type="submit"
        className="btn-primary capitalize mt-3.5 float-right"
      >
        update
      </button>
    </form>
  );
};

export default Password;
