import MenuItems from "./ui/MenuItems";

const Menu = () => {
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
            <button className="capitalize">all</button>
          </li>
          <li>
            <button className="capitalize">burger</button>
          </li>
          <li>
            <button className="capitalize">pizza</button>
          </li>
          <li>
            <button className="capitalize">pasta</button>
          </li>
          <li>
            <button className="capitalize">fries</button>
          </li>
        </ul>
      </div>
      <MenuItems />
    </div>
  );
};

export default Menu;
