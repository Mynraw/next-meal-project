import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import Input from "../../components/form/Input";
import { accountInfoSchema } from "../../../schema/accountInfoSchema";

const Account = ({user}) => {
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
      // here is the magic(?)
      enableReinitialize: true,
      initialValues: {
        fullName: user.fullName ? user.fullName : "",
        email: user.email ? user.email : "",
        phoneNumber: user.phoneNumber ? user.phoneNumber : "",
        address: user.address ? user.address : "",
        title: user.title ? user.title : "",
        bio: user.bio ? user.bio : "",
      },
      onSubmit,
      validationSchema: accountInfoSchema,
    });

  const inputsAccount = [
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
      name: "email",
      type: "email",
      placeholder: "your e-mail",
      value: values.email,
      errormessage: errors.email,
      touched: touched.email,
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
      name: "title",
      type: "text",
      placeholder: "your title",
      value: values.title,
      errormessage: errors.title,
      touched: touched.title,
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

  return (
    <form onSubmit={handleSubmit} className="my-10">
      <div className="grid grid-cols-2 gap-3.5">
        {inputsAccount.map((input) => (
          <Input
            addClass="col-span-2 md:col-span-1"
            key={input.id}
            onChange={handleChange}
            onBlur={handleBlur}
            {...input}
          />
        ))}
      </div>
      <button className="btn-primary capitalize mt-3.5" type="submit">
        update
      </button>
      {/*<input type={"submit"} className={"btn-primary capitalize mt-3.5"} />*/}
    </form>
  );
};

export default Account;
