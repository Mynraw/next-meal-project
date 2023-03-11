import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession, getSession } from "next-auth/react";
import axios from "axios";
import Title from "@/components/ui/Title";
import Link from "next/link";
import Input from "@/components/form/Input";
import { useFormik } from "formik";
import { loginSchema } from "schema/loginSchema";
import { FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const { push } = useRouter();
  const { data: session } = useSession();
  const [currentUser, setCurrentUser] = useState();

  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    if (res.status === 200) {
      toast("Login is successful! You will be redirected shortly.", {
        theme: "dark",
      });
      actions.resetForm();
    } else if (res.status === 401) {
      toast.error("Your email or password is not correct.", { theme: "dark" });
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        setCurrentUser(
          res.data?.find((user) => user.email === session?.user?.email)
        );
        push("/profile/" + currentUser?._id);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [session, currentUser]);

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "your e-mail",
      value: values.email,
      errormessage: errors.email,
      touched: touched.email,
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
        <button
          type="button"
          onClick={() => signIn("github")}
          className="p-2 my-1 bg-alternative rounded-full hover:opacity-90 transition-all text-white uppercase font-bold flex items-center justify-center gap-2"
        >
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

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const user = res.data?.find((user) => user.email === session?.user.email);

  if (session && user) {
    return {
      redirect: {
        destination: "/profile/" + user._id,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Login;
