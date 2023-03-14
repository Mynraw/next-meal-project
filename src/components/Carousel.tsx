import Title from "./ui/Title";
import Slider from "react-slick";
import Image from "next/image";

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    // dotsClass: "text-red",
    appendDots: (dots: any) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
  };
  return (
    <div className="py-16 h-screen">
      <div className="absolute top-0 left-0 h-full w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="hero bg"
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            minHeight: "700px",
          }}
        />
      </div>
      <div className="container relative mx-auto py-16">
        <Slider {...settings}>
          <section className="text-white">
            <Title addClass="text-5xl">Most Dramatic Burgers</Title>
            <p className="text-sm my-7 w-auto md:w-6/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              vitae voluptate sed architecto eligendi sint ipsa minus quas, quae
              nesciunt molestias ducimus blanditiis et? Pariatur asperiores
              nihil blanditiis ad quidem!
            </p>
            <button className="btn-primary">Order Now</button>
          </section>
          <section className="text-white">
            <Title addClass="text-5xl">Karen&apos;s Choice</Title>
            <p className="text-sm my-7 w-auto md:w-6/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              vitae voluptate sed architecto eligendi sint ipsa minus quas, quae
              nesciunt molestias ducimus blanditiis et? Pariatur asperiores
              nihil blanditiis ad quidem!
            </p>
            <button className="btn-primary">Order Now</button>
          </section>
          <section className="text-white">
            <Title addClass="text-5xl">book now</Title>
            <p className="text-sm my-7 w-auto md:w-6/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              vitae voluptate sed architecto eligendi sint ipsa minus quas, quae
              nesciunt molestias ducimus blanditiis et? Pariatur asperiores
              nihil blanditiis ad quidem!
            </p>
            <button className="btn-primary">Order Now</button>
          </section>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
