import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Reservation from "@/components/Reservation";
import Customers from "@/components/Customers";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <Menu />
      <About />
      <Reservation />
      <Customers />
    </div>
  );
};

export default Home;
