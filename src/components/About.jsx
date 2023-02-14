import Image from "next/image";

const About = () => {
  return (
    <div className="bg-alternative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 order-2 md:order-2 items-center py-24">
        <div className="text-white flex flex-col gap-7 order-1 md:order-2">
          <h1 className="text-4xl font-permaMarker">we are sjwburger</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsum
            impedit, quae atque velit doloremque amet nihil libero dolore? Hic
            ullam doloremque et autem laborum ea officia vel sequi amet!
            Quibusdam dolorum fugit repudiandae eos blanditiis. Minima eum
            voluptates porro.
          </p>
          <button className="btn-primary capitalize max-w-[180px]">
            read more
          </button>
        </div>
        <div className="relative order-2 md:order-1 mx-auto">
          <Image
            src="/images/about-img.png"
            alt="damburger"
            width={450}
            height={650}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
