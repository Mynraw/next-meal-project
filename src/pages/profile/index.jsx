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
        <div>
          <div className="relative w-24 h-24">
            <Image
              src={"/images/kekw.jpg"}
              alt="goat"
              sizes={sizes}
              fill
              style={style}
            />
          </div>
          <span>John Doe</span>
        </div>
        <div>
          <button>
            <AiFillHome />
            <span>account</span>
          </button>
          <button>
            <HiKey />
            <span>password</span>
          </button>
          <button>
            <RiEBike2Fill />
            <span>orders</span>
          </button>
          <button>
            <MdLogout />
            <span>logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
