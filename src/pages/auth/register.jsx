import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { useFormik } from "formik";
import { registerSchema } from "schema/registerSchema";

const Register = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    actions.resetForm();
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        eMail: "",
        password: "",
        passwordMatch: "",
      },
      validationSchema: registerSchema,
      onSubmit,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      placeholder: "your full name",
      type: "text",
      value: values.fullName,
      errormessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "eMail",
      placeholder: "your e-mail address",
      type: "email",
      value: values.eMail,
      errormessage: errors.eMail,
      touched: touched.eMail,
    },
    {
      id: 3,
      name: "password",
      placeholder: "password",
      type: "password",
      value: values.password,
      errormessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "passwordMatch",
      placeholder: "confirm your password",
      type: "password",
      value: values.passwordMatch,
      errormessage: errors.passwordMatch,
      touched: touched.passwordMatch,
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <Title addClass={"text-4xl text-center my-5"}>sign up</Title>
      <form
        className="flex flex-col mx-auto justify-center w-2/3 py-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-y-3.5">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={input.value}
            />
          ))}
        </div>
        <button
          type="submit"
          className="p-2 my-2 mt-4 bg-primary rounded-full hover:opacity-90 transition-all uppercase font-bold text-white"
        >
          sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
