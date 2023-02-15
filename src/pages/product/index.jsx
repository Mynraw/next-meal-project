import Image from "next/image";
import Title from "@/components/ui/Title";

const style = {
  objectFit: "contain",
};

const Index = () => {
  return (
    <div className="grid place-items-center">
      <div className="container h-screen w-screen grid grid-cols-1 md:grid-cols-2 items-start md:items-center gap-x-28">
        <div className="relative h-[100%] w-[100%]">
          <Image src="/images/f1.png" alt="piz" fill style={style} />
        </div>
        <div className="relative flex flex-col gap-y-6 items-center md:items-start">
          <Title addClass="text-4xl">item</Title>
          <span className="text-primary underline underline-offset-4 text-xl">
            $ price
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            molestias eum libero, reprehenderit suscipit ratione iure sunt esse?
            Omnis, voluptatem.
          </p>
          <div>
            <strong className="block text-2xl mb-1">Choose the size</strong>
            <div className="flex items-center gap-10">
              <button className="relative">
                <Image src="/images/size.png" alt="" width={60} height={60} />
                <span className="bg-primary text-black text-sm rounded-lg px-3 absolute left-5 bottom-12 overflow-hidden">
                  Small
                </span>
              </button>
              <button className="relative">
                <Image src="/images/size.png" alt="" width={80} height={80} />
                <span className="bg-primary text-black text-sm rounded-lg px-3 absolute left-7 bottom-16 overflow-hidden">
                  Medium
                </span>
              </button>
              <button className="relative">
                <Image src="/images/size.png" alt="" width={100} height={100} />
                <span className="bg-primary text-black text-sm rounded-lg px-3 absolute left-10 bottom-20 overflow-hidden">
                  Large
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <strong className="block text-2xl mb-2">
              Choose additional ingredients
            </strong>
            <div className="flex items-center justify-center md:justify-start gap-x-1 mb-1">
              <input
                className="w-5 h-5 accent-primary"
                id="test"
                type={"checkbox"}
              />
              <label className="mr-3" for="test">
                ketchup
              </label>
              <input
                className="w-5 h-5 accent-primary"
                id="test2"
                type={"checkbox"}
              />
              <label className="mr-3" for="test2">
                test
              </label>
              <input
                className="w-5 h-5 accent-primary"
                id="test3"
                type={"checkbox"}
              />
              <label for={"test3"}>test</label>
            </div>
          </div>
          <button className="btn-primary max-w-[150px]">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
