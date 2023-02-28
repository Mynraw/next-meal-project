import Link from "next/link";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { useFormik } from "formik";
import { adminLoginSchema } from "schema/adminLoginSchema";

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
      validationSchema: adminLoginSchema,
      onSubmit,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      value: values.username,
      errormessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "password",
      value: values.password,
      errormessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container mx-auto py-16 mb-10">
      <Title addClass={"text-4xl text-center my-5"}>admin</Title>
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
          admin login
        </button>
        <Link href={"/home"} className="mt-3">
          <span className="underline cursor-pointer">Go to home page</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
