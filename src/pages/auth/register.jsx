import axios from "axios";
import { useFormik } from "formik";
import { registerSchema } from "schema/registerSchema";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";

const Register = () => {
  const onSubmit = async (values, actions) => {
    try {
      const { res } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        values
      );
    } catch (error) {
      console.log(error);
    }
    // actions.resetForm();
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit,
      validationSchema: registerSchema,
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
      name: "email",
      placeholder: "your e-mail address",
      type: "email",
      value: values.email,
      errormessage: errors.email,
      touched: touched.email,
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
      name: "passwordConfirm",
      placeholder: "confirm your password",
      type: "password",
      value: values.passwordConfirm,
      errormessage: errors.passwordConfirm,
      touched: touched.passwordConfirm,
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
              onChange={handleChange}
              onBlur={handleBlur}
              {...input}
              // value={input.value}
            />
          ))}
        </div>
        <button
          type="submit"
          className="cursor-pointer p-2 my-2 mt-4 bg-primary rounded-full hover:opacity-90 transition-all uppercase font-bold text-white"
        >
          register
        </button>
        {/* <input
          type="submit"
          value="register"
          className="cursor-pointer p-2 my-2 mt-4 bg-primary rounded-full hover:opacity-90 transition-all uppercase font-bold text-white"
        /> */}
      </form>
    </div>
  );
};

export default Register;
