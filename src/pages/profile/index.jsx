import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { HiKey } from "react-icons/hi";
import { RiEBike2Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

const Index = () => {
  const style = {
    borderRadius: "50%",
    objectFit: "cover",
  };

  const sizes = `(max-width: 768px) 100vw,
  (max-width: 1200px) 50vw,
  33vw`;

  return (
    <div className="py-16">
      <div className="px-10 grid grid-cols-5">
        <div className="flex flex-col gap-3 col-span-1 border border-gray-300 pt-5">
          <div className="relative w-24 h-24 mx-auto">
            <Image
              src={"/images/kekw.jpg"}
              alt="goat"
              sizes={sizes}
              fill
              style={style}
            />
          </div>
          <div className="mx-auto">
            <span className="text-2xl font-bold">John Doe</span>
          </div>
          <div className="text-black">
            <button className="flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-primary hover:text-white transition-all">
              <AiFillHome />
              <span className="capitalize">account</span>
            </button>
            <button className="flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-primary hover:text-white transition-all">
              <HiKey />
              <span className="capitalize">password</span>
            </button>
            <button className="flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-primary hover:text-white transition-all">
              <RiEBike2Fill />
              <span className="capitalize">orders</span>
            </button>
            <button className="flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-primary hover:text-white transition-all">
              <MdLogout />
              <span className="capitalize">logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
