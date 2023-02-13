import Title from "./ui/Title";
import Slider from "react-slick";

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
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
  };
  return (
    <div className="container mx-auto mt-48 pt-5">
      <Slider {...settings}>
        <section className="text-white">
          <Title addClass="text-5xl">Most Dramatic Burgers</Title>
          <p className="text-sm my-7 w-auto md:w-6/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae
            voluptate sed architecto eligendi sint ipsa minus quas, quae
            nesciunt molestias ducimus blanditiis et? Pariatur asperiores nihil
            blanditiis ad quidem!
          </p>
          <button className="btn-primary">Order Now</button>
        </section>
        <section className="text-white">
          <Title addClass="text-5xl">Karen&apos;s Choice</Title>
          <p className="text-sm my-7 w-auto md:w-6/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae
            voluptate sed architecto eligendi sint ipsa minus quas, quae
            nesciunt molestias ducimus blanditiis et? Pariatur asperiores nihil
            blanditiis ad quidem!
          </p>
          <button className="btn-primary">Order Now</button>
        </section>
        <section className="text-white">
          <Title addClass="text-5xl">book now</Title>
          <p className="text-sm my-7 w-auto md:w-6/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae
            voluptate sed architecto eligendi sint ipsa minus quas, quae
            nesciunt molestias ducimus blanditiis et? Pariatur asperiores nihil
            blanditiis ad quidem!
          </p>
          <button className="btn-primary">Order Now</button>
        </section>
      </Slider>
    </div>
  );
};

export default Carousel;
