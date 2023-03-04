import Input from "@/components/form/Input";
import { accountInfoSchema } from "schema/accountInfoSchema";
import { useFormik } from "formik";

const Account = () => {
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

  return (
    <form onSubmit={handleSubmit} className="my-10">
      <div className="grid grid-cols-2 gap-3.5">
        {inputsAccount.map((input) => (
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
  );
};

export default Account;
