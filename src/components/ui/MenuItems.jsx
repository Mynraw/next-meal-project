import Image from "next/image";
import Link from "next/link";
import { meals } from "@/data/meals";
import { GiShoppingBag } from "react-icons/gi";

const sizes = "(max-width: 768px) 100vw (max-width: 1200px) 50vw, 33vw";

const MealTemplate = () => {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {meals.map((content) => {
        return (
          <Link key={content.mealId} href="/product">
            <div className="bg-alternative text-white rounded-2xl pb-4 group">
              <div className="relative bg-[#F1F2F3] grid place-content-center rounded-t-xl h-[200px] rounded-bl-[38px] p-5 overflow-hidden">
                <Image
                  src={`/images/f${content.mealId}.png`}
                  alt={content.title}
                  width={180}
                  height={150}
                  sizes={sizes}
                  className={"group-hover:scale-110 transition-all"}
                />
              </div>
              <div className="flex flex-col gap-3 px-5 mt-5">
                <h2 className="capitalize text-xl">{content.title}</h2>
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
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const MenuItems = () => {
  return <MealTemplate />;
};

export default MenuItems;
