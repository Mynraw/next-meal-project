import Input from "../../components/form/Input";
import { useFormik } from "formik";
import { accountInfoSchema } from "../../../schema/accountInfoSchema";

const Footer = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    actions.resetForm();
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        location: "",
        eMail: "",
        phoneNumber: "",
        description: "",
        availableDays: "",
        openingHours: "",
        link: "",
      },
      validationSchema: accountInfoSchema,
      onSubmit,
    });

  const inputsAccount = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "location",
      value: values.location,
      errormessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "eMail",
      type: "email",
      placeholder: "e-mail address",
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
      name: "description",
      type: "text",
      placeholder: "description",
      value: values.description,
      errormessage: errors.description,
      touched: touched.description,
    },
    {
      id: 5,
      name: "availableDays",
      type: "text",
      placeholder: "available days",
      value: values.availableDays,
      errormessage: errors.availableDays,
      touched: touched.availableDays,
    },
    {
      id: 6,
      name: "link",
      type: "text",
      placeholder: "link",
      value: values.link,
      errormessage: errors.link,
      touched: touched.link,
    },
  ];

  const initialValues = [
    {
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12123.747312270638!2d-74.14145235034844!3d40.56507226612508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24be42aff913b%3A0x18a9057eb0cba701!2sOakwood%20Diner!5e0!3m2!1str!2str!4v1676469035094!5m2!1str!2str",
      eMail: "mynraw@outlook.com",
      phoneNumber: "+03 87162121",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            culpa aut, praesentium voluptas saepe tempore quis quo corrupti
            voluptatem perferendis.`,
      availDays: "everyday",
      openingHours: "10.00 am - 10.00 pm",
      linkAddress: "https://github.com/Mynraw",
    },
  ];
  return (
    <div className="my-10">
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Footer;
