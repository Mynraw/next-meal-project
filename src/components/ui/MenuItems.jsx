import Image from "next/image";
import Meals from "db/meals.json";

const MealTemplate = ({ id, name, description }) => {
  return (
    <div>
      <div className="relative w-[180px] h-[150px]">
        <Image src={`/images/f${id}.png`} alt="pizza" fill />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const MenuItems = () => {
  return (
    <div>
      <MealTemplate id={1} name="hmm" description={"asd"} />
    </div>
  );
};

export default MenuItems;
