import Title from "./ui/Title";
import Slider from "react-slick";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { customers } from "@/data/customers";

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineRight className="fill-white text-xl relative top-3 left-3" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineLeft className="fill-white text-xl relative top-3 left-3" />
    </div>
  );
};

const Customers = () => {
  const style = {
    objectFit: "cover",
  };

  const settings = {
    dots: false,
    // arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true,
    className: "client-slide",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container w-full h-full mx-auto text-center py-16">
      <Title addClass={"text-4xl"}>what our customers say</Title>
      <Slider {...settings}>
        {customers.map((customer) => {
          return (
            <div key={customer.id} className="h-full">
              <div className="bg-alternative relative flex flex-col items-start gap-3 text-left rounded-lg p-5 text-white">
                <p>{customer.comment}</p>
                <strong className="block text-xl">{customer.name}</strong>
                <span>{customer.title}</span>
              </div>
              <div className="relative top-5 h-28 w-28 border-4 border-primary rounded-full before:content-[''] before:absolute before:top-[-5px] before:left-10 before:w-5 before:h-5 before:bg-primary before:origin-right before:rotate-45">
                <Image
                  className="rounded-full"
                  src={`/images/client${customer.id}.jpg`}
                  alt="person"
                  fill
                  style={style}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Customers;
