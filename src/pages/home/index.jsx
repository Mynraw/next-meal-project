import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Reservation from "@/components/Reservation";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <Menu />
      <About />
      <Reservation />
    </div>
  );
};

export default Home;
