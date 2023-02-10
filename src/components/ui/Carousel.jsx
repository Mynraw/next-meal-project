import Title from "./Title";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="h-screen">
      <div className="relative h-full w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="hero bg"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="container absolute z-auto mx-auto">
          <Title>Fast Food Restaurant</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae
            voluptate sed architecto eligendi sint ipsa minus quas, quae
            nesciunt molestias ducimus blanditiis et? Pariatur asperiores nihil
            blanditiis ad quidem!
          </p>
          <button className="btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
