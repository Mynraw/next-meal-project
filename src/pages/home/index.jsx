import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import Menu from "@/components/Menu";
import About from "@/components/About";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <Menu />
      <About />
    </div>
  );
};

export default Home;
