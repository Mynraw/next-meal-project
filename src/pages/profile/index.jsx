import { useState } from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { accountInfoSchema } from "schema/accountInfoSchema";
import { useFormik } from "formik";
import { AiFillHome } from "react-icons/ai";
import { HiKey } from "react-icons/hi";
import { RiEBike2Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

const Index = () => {
  const [menuTab, setMenuTab] = useState({
    account: true,
    password: false,
    orders: false,
  });

  const handleTabs = (e) => {
    console.log(e.target.classList);
    switch (e.target.classList) {
      case "account":
        setMenuTab((prevVal) => ({ ...prevVal, account: "true" }));
        break;
      case "password":
        setMenuTab((prevVal) => ({ ...prevVal, password: "true" }));
    }
  };

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    actions.resetForm();
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        eMail: "",
        phoneNumber: "",
        address: "",
        job: "",
        bio: "",
      },
      validationSchema: accountInfoSchema,
      onSubmit,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "your full name",
      value: values.fullName,
      errormessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "eMail",
      type: "email",
      placeholder: "your e-mail",
      value: values.eMail,
      errormessage: errors.eMail,
      touched: touched.eMail,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "text",
      placeholder: "phone number",
      value: values.phoneNumber,
      errormessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "address",
      value: values.address,
      errormessage: errors.address,
      touched: touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "your title",
      value: values.job,
      errormessage: errors.job,
      touched: touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "your bio",
      value: values.bio,
      errormessage: errors.bio,
      touched: touched.bio,
    },
  ];
  const style = {
    borderRadius: "50%",
    objectFit: "cover",
  };

  const sizes = `(max-width: 768px) 100vw,
  (max-width: 1200px) 50vw,
  33vw`;

  return (
    <div className="py-16">
      <div className="px-10 grid grid-cols-5 items-center gap-y-8 md:gap-x-8">
        <div className="flex flex-col gap-3 col-span-5 md:col-span-1 border border-gray-300 pt-5">
          <div className="relative w-24 h-24 mx-auto">
            <Image
              src={"/images/kekw.jpg"}
              alt="goat"
              sizes={sizes}
              fill
              style={style}
            />
          </div>
          <div className="mx-auto">
            <span className="text-2xl font-bold">John Doe</span>
          </div>
          <div className="text-black">
            <button
              onClick={(e) => handleTabs(e)}
              className="account flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-[#f9b420] hover:text-white transition-all"
            >
              <AiFillHome />
              <span className="capitalize">account</span>
            </button>
            <button className="password flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-[#f9b420] hover:text-white transition-all">
              <HiKey />
              <span className="capitalize">password</span>
            </button>
            <button className="orders flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-[#f9b420] hover:text-white transition-all">
              <RiEBike2Fill />
              <span className="capitalize">orders</span>
            </button>
            <button className="flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-[#f9b420] hover:text-white transition-all">
              <MdLogout />
              <span className="capitalize">logout</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 md:col-span-4 h-full">
          <Title addClass={"text-4xl text-left"}>account settings</Title>
          <form onSubmit={handleSubmit} className="my-10">
            <div className="grid grid-cols-2 gap-3.5">
              {inputs.map((input) => (
                <Input
                  addClass="col-span-2 md:col-span-1"
                  key={input.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={input.value}
                  {...input}
                />
              ))}
            </div>
            <button type="submit" className="btn-primary capitalize mt-3.5">
              update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
