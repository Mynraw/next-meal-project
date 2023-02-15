import Input from "./form/Input";
import Title from "./ui/Title";

const Contact = () => {
  return (
    <div className="w-full h-full container mx-auto py-16">
      <div className="mb-10">
        <Title addClass="text-4xl text-center md:text-left">book a table</Title>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-x-10 text-center lg:text-left">
        <div className="flex-1 h-full w-full mb-10 lg:mb-0">
          <div className="flex flex-col gap-y-3 mb-6">
            <Input inputType="text" />
            <Input inputType="number" />
            <Input inputType="email" />
            <Input inputType="select" />
            <Input inputType="date" />
          </div>
          <button className="btn-primary uppercase">book now</button>
        </div>
        <div className="flex-1">
          <iframe
            className="rounded-lg w-[calc(100vw-125px)] h-[calc(100vh-300px)] max-w-[600px] max-h[450px]"
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

export default Contact;
