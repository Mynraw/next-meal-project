import Input from "./form/Input";
import Title from "./ui/Title";

const Contact = () => {
  return (
    <div className="w-full h-full container mx-auto py-16">
      <Title addClass="text-4xl">book a table</Title>
      <Input />
      <button className="btn-primary">book now</button>
    </div>
  );
};

export default Contact;
