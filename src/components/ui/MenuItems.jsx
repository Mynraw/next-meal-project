import Image from "next/image";
import meals from "src/data/meals.json";
import { GiShoppingBag } from "react-icons/gi";

const sizes = "(max-width: 768px) 100vw (max-width: 1200px) 50vw, 33vw";

const MealTemplate = (props) => {
  return (
    <div>
      {props.data.map((content) => {
        <div className="bg-alternative text-white rounded-2xl pb-3">
          <div className="relative bg-[#F1F2F3] grid place-content-center rounded-t-xl rounded-bl-[38px] p-5 overflow-hidden">
            <Image
              src={`/images/f${content.mealId}.png`}
              alt={content.title}
              width={180}
              height={150}
              sizes={sizes}
            />
          </div>
          <div className="flex flex-col gap-3 px-5 mt-5">
            <h2 className="capitalize text-2xl">{content.title}</h2>
            <p className="capitalize">{content.description}</p>
            <div className="flex justify-between items-center">
              <div>
                <span>{content.price}</span>
              </div>
              <div className="bg-[#f9b420] p-3 rounded-full cursor-pointer">
                <GiShoppingBag />
              </div>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

const MenuItems = () => {
  return (
    <div className="bg-red-500 w-full h-full">
      works?
      <MealTemplate data={meals} />
    </div>
  );
};

export default MenuItems;
