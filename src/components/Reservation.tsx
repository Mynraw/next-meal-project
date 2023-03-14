import Input from "./form/Input";
import Title from "./ui/Title";
import { useFormik } from "formik";
import { resSchema } from "../../schema/reservationSchema";

const Reservation = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    actions.resetForm();
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        eMail: "",
        resCount: "",
        resDate: "",
      },
      validationSchema: resSchema,
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
      name: "phoneNumber",
      type: "number",
      placeholder: "phone number",
      value: values.phoneNumber,
      errormessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "eMail",
      type: "email",
      placeholder: "your e-mail",
      value: values.eMail,
      errormessage: errors.eMail,
      touched: touched.eMail,
    },
    {
      id: 4,
      name: "resCount",
      type: "select",
      placeholder: "number of people",
      value: values.resCount,
      errormessage: errors.resCount,
      touched: touched.resCount,
    },
    {
      id: 5,
      name: "resDate",
      type: "date",
      placeholder: "",
      value: values.resDate,
      errormessage: errors.resDate,
      touched: touched.resDate,
    },
  ];

  return (
    <div className="w-full h-full container mx-auto py-16">
      <div className="mb-10">
        <Title addClass="text-4xl text-center md:text-left">book a table</Title>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-x-10 text-center lg:text-left">
        <form className="flex-1 w-full mb-10 lg:mb-0" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-3.5 mb-5 lg:mb-8">
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
          <button type="submit" className="btn-primary uppercase">
            book now
          </button>
        </form>
        <div>
          <iframe
            className="rounded-lg w-[calc(100vw-125px)] h-[70vh] max-w-[600px] max-h-[420px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12123.747312270638!2d-74.14145235034844!3d40.56507226612508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24be42aff913b%3A0x18a9057eb0cba701!2sOakwood%20Diner!5e0!3m2!1str!2str!4v1676469035094!5m2!1str!2str"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
