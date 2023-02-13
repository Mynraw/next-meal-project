import Image from "next/image";
import { GiShoppingBag } from "react-icons/gi";

const Campaigns = () => {
  return (
    <div className="container my-20 grid grid-cols-2 gap-4 mx-auto">
      <div className="col-span-2 md:col-span-1 flex sm:flex-row md:flex-col lg:flex-row items-center gap-3 justify-start bg-alternative p-5 rounded-sm w-full group">
        <div className="border-[3px] rounded-full border-primary p-0 m-0 w-[180px] h-[180px] relative">
          <Image
            src="/images/f11.jpg"
            alt="campaign item"
            fill
            className="rounded-full group-hover:scale-110 transition-all"
          />
        </div>
        <div className="text-white grid gap-3">
          <h2 className="font-permaMarker text-xl">Tasty Thursdays</h2>
          <p className="font-permaMarker">
            <span className="text-5xl">20%</span> off
          </p>
          <button className="btn-primary flex items-center gap-3">
            Order Now <GiShoppingBag className="text-xl" />
          </button>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 flex sm:flex-row md:flex-col lg:flex-row items-center gap-3 justify-start bg-alternative p-5 rounded-sm w-full group">
        <div className="border-[3px] rounded-full border-primary p-0 m-0 w-[180px] h-[180px] relative">
          <Image
            src="/images/f11.jpg"
            alt="campaign item"
            fill
            className="rounded-full group-hover:scale-110 transition-all"
          />
        </div>
        <div className="text-white grid gap-3">
          <h2 className="font-permaMarker text-xl">Tasty Thursdays</h2>
          <p className="font-permaMarker">
            <span className="text-5xl">20%</span> off
          </p>
          <button className="btn-primary flex items-center gap-3">
            Order Now <GiShoppingBag className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
