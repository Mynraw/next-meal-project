import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <Menu />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
