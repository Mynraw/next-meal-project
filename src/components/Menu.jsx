import { useState } from "react";
import MenuItems from "./ui/MenuItems";

const Menu = () => {
  const [liActive, setLiActive] = useState({
    all: true,
    burger: false,
    pizza: false,
    pasta: false,
    fries: false,
  });
  // const handleClick = (prop) => {
  //   setLiActive((prevVal) => ({ ...prevVal, ...prop }));
  // };
  return (
    <div className="container grid place-content-center mx-auto">
      <div>
        <h1 className="font-permaMarker text-alternative text-center text-5xl">
          our menu
        </h1>
      </div>
      <div className="mx-auto my-12">
        <ul className="flex items-center gap-5">
          <li className="btn-active">
            <button>All</button>
          </li>
          <li className="btn-passive">
            <button>Burger</button>
          </li>
          <li>
            <button className="btn-passive">Pizza</button>
          </li>
          <li>
            <button className="btn-passive">Pasta</button>
          </li>
          <li>
            <button className="btn-passive">Fries</button>
          </li>
        </ul>
      </div>
      <MenuItems />
      <div className="mx-auto mt-10 mb-16">
        <button className="btn-primary !py-3 !px-14">View More</button>
      </div>
    </div>
  );
};

export default Menu;
