import { useState } from "react";
import MenuItems from "./ui/MenuItems";

const Menu = () => {
  const [isLiActive, setIsLiActive] = useState(false);
  const handleClick = () => {
    setIsLiActive(true);
  };
  return (
    <div className="container grid place-content-center mx-auto">
      <div>
        <h1 className="font-permaMarker text-alternative text-center text-5xl">
          our menu
        </h1>
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li>
            <button
              onClick={() => handleClick()}
              className={"btn-menu" + (isLiActive && "btn-active")}
            >
              all
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick()}
              className={
                "btn-menu" + (isLiActive ? "btn-active" : "btn-passive")
              }
            >
              burger
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick()}
              className={"btn-menu" + (isLiActive && "btn-active")}
            >
              pizza
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick()}
              className={"btn-menu" + (isLiActive && "btn-active")}
            >
              pasta
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick()}
              className={"btn-menu" + (isLiActive && "btn-active")}
            >
              fries
            </button>
          </li>
        </ul>
      </div>
      <MenuItems />
    </div>
  );
};

export default Menu;
