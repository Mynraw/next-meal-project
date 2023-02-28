import Title from "@/components/ui/Title";
import Link from "next/link";
import Input from "@/components/form/Input";
import { useFormik } from "formik";
import { loginSchema } from "schema/loginSchema";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((res) => setTimeout(res, 1000));
    actions.resetForm();
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "your username/e-mail",
      value: values.username,
      errormessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "your password",
      value: values.password,
      errormessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <Title addClass={"text-4xl text-center my-5"}>Login</Title>
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
          login
        </button>
        <button className="p-2 my-1 bg-alternative rounded-full hover:opacity-90 transition-all text-white uppercase font-bold flex items-center justify-center gap-2">
          <FaGithub className="text-2xl" />
          github
        </button>
        <Link href={"/auth/register"} className="mt-3">
          <span className="underline cursor-pointer">
            Don&apos;t you have an account? Sign up for free!
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
