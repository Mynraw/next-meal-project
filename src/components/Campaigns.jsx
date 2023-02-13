import Image from "next/image";
import { GiShoppingBag } from "react-icons/gi";

const Campaigns = () => {
  return (
    <div className="container flex items-center justify-start gap-7 mx-auto my-24">
      <div className="flex items-center gap-3 justify-start bg-alternative p-5 rounded-sm w-full group">
        <div className="border-[3px] rounded-full border-primary p-0 m-0 w-[150px] h-[150px] relative">
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
      <div className="flex items-center gap-3 justify-start bg-alternative p-5 rounded-sm w-full group">
        <div className="border-[3px] rounded-full border-primary p-0 m-0 w-[150px] h-[150px] relative">
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
