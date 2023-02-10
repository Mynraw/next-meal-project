import Title from "./Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    // <section className="relative pt-24 grid place-content-center">
    //   <div className="container grid grid-cols-12 items-start gap-y-7 text-white">
    //     <Title addClass="text-3xl col-start-1 col-end-8">
    //       Most Dramatic Burgers
    //     </Title>
    //     <p className="col-start-1 col-end-12 md:col-end-8 text-sm">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae
    //       voluptate sed architecto eligendi sint ipsa minus quas, quae nesciunt
    //       molestias ducimus blanditiis et? Pariatur asperiores nihil blanditiis
    //       ad quidem!
    //     </p>
    //     <button className="btn-primary col-start-1 col-end-6 sm:col-end-4 md:col-end-3 ">
    //       Order Now
    //     </button>
    //   </div>
    // </section>

    <Slider {...settings}></Slider>
  );
};

export default Carousel;
