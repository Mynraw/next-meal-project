import Image from "next/image";

const Index = () => {
  return (
    <div className="w-full h-full mx-auto py-16">
      <div className="p-10">
        <div className=" bg-secondary">
          <table className="bg-[#354257] text-gray-200 font-extralight w-full">
            <thead>
              <tr className="uppercase">
                <th className="p-3">order id</th>
                <th className="p-3">customer</th>
                <th className="p-3">address</th>
                <th className="p-3">total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="capitalize text-center bg-alternative">
                <td className="p-4">12873621873</td>
                <td className="p-4">john doe</td>
                <td className="p-4">bake st. 73/2</td>
                <td className="p-4">$20</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-[#f9b420] w-full mt-8 flex flex-col md:flex-row items-center justify-between py-3 px-12 text-center text-black">
          <div className="relative w-auto h-auto flex flex-col items-center gap-1 p-5">
            <Image src={"/images/paid.png"} alt="bake" width={50} height={50} />
            <span className="capitalize">ordered</span>
          </div>
          <div className="relative w-auto h-auto flex flex-col items-center gap-1 p-5">
            <Image src={"/images/bake.png"} alt="bake" width={50} height={50} />
            <span className="capitalize">preparing</span>
          </div>
          <div className="relative w-auto h-auto flex flex-col items-center gap-1 p-5">
            <Image src={"/images/bike.png"} alt="bake" width={50} height={50} />
            <span className="capitalize">on the way</span>
          </div>
          <div className="relative w-auto h-auto flex flex-col items-center gap-1 p-5">
            <Image
              src={"/images/delivered.png"}
              alt="bake"
              width={50}
              height={50}
            />
            <span className="capitalize">delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
