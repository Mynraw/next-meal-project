import Input from "../../components/form/Input";
import { accountInfoSchema } from "../../../schema/accountInfoSchema"
import { useFormik } from "formik";

const Password = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    actions.resetForm();
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      validationSchema: accountInfoSchema,
      onSubmit,
    });

  const inputsPassword = [
    {
      id: 1,
      name: "currentPassword",
      type: "password",
      placeholder: "your current password",
      value: values.currentPassword,
      errormessage: errors.currentPassword,
      touched: touched.currentPassword,
    },
    {
      id: 2,
      name: "newPassword",
      type: "password",
      placeholder: "new password",
      value: values.newPassword,
      errormessage: errors.newPassword,
      touched: touched.newPassword,
    },
    {
      id: 3,
      name: "confirmNewPassword",
      type: "password",
      placeholder: "confirm new password",
      value: values.confirmNewPassword,
      errormessage: errors.confirmNewPassword,
      touched: touched.confirmNewPassword,
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
            value={input.value}
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
