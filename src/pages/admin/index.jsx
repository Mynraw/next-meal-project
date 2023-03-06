import { useState } from "react";
import Products from "./Products";
import Orders from "./Orders";
import Categories from "./Categories";
import Image from "next/image";
import Title from "@/components/ui/Title";
import { RiEBike2Fill, RiLayoutBottomLine } from "react-icons/ri";
import { MdLogout, MdOutlineFastfood } from "react-icons/md";
import { BiCategory } from "react-icons/bi";

const Index = () => {
  const [menuTab, setMenuTab] = useState(0);
  const [tabTitle, setTabTitle] = useState("account settings");

  const handleTabs = (tab) => {
    setMenuTab(tab);
    switch (tab) {
      case 0:
        setTabTitle("products");
        break;
      case 1:
        setTabTitle("orders");
        break;
      case 2:
        setTabTitle("categories");
        break;
      case 3:
        setTabTitle("footer");
        break;
      default:
        break;
    }
  };

  const style = {
    borderRadius: "50%",
    objectFit: "cover",
    padding: "5px",
  };

  const sizes = `(max-width: 768px) 100vw,
  (max-width: 1200px) 50vw,
  33vw`;

  return (
    <div className="py-16">
      <div className="px-10 grid grid-cols-5 items-center gap-y-8 md:gap-x-8">
        <div className="flex flex-col gap-3 col-span-5 md:col-span-1 border border-gray-300 pt-5">
          <div className="relative w-24 h-24 mx-auto border-4 border-black rounded-full">
            <Image
              src={"/images/person.png"}
              alt="goat"
              sizes={sizes}
              fill
              style={style}
            />
          </div>
          <div className="mx-auto">
            <span className="text-2xl font-bold capitalize">admin</span>
          </div>
          <div className="text-black">
            <button
              onClick={() => handleTabs(0)}
              className={`account flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-[#f9b420] hover:text-white transition-all ${
                menuTab === 0 && "bg-[#f9b420] text-white"
              }`}
            >
              <MdOutlineFastfood />
              <span className="capitalize">products</span>
            </button>
            <button
              onClick={() => handleTabs(1)}
              className={`account flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-[#f9b420] hover:text-white transition-all ${
                menuTab === 1 && "bg-[#f9b420] text-white"
              }`}
            >
              <RiEBike2Fill />
              <span className="capitalize">orders</span>
            </button>
            <button
              onClick={() => handleTabs(2)}
              className={`account flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-[#f9b420] hover:text-white transition-all ${
                menuTab === 2 && "bg-[#f9b420] text-white"
              }`}
            >
              <BiCategory />
              <span className="capitalize">categories</span>
            </button>
            <button
              onClick={() => handleTabs(3)}
              className={`account flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-[#f9b420] hover:text-white transition-all ${
                menuTab === 3 && "bg-[#f9b420] text-white"
              }`}
            >
              <RiLayoutBottomLine />
              <span className="capitalize">footer</span>
            </button>
            <button
              className={`account flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-[#f9b420] hover:text-white transition-all`}
            >
              <MdLogout />
              <span className="capitalize">logout</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 md:col-span-4 h-full">
          <Title addClass={"text-4xl text-left"}>{tabTitle}</Title>
          {menuTab === 0 && <Products />}
          {menuTab === 1 && <Orders />}
          {menuTab === 2 && <Categories />}
        </div>
      </div>
    </div>
  );
};

export default Index;
