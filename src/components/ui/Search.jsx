import React from "react";
import Title from "./Title";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import { MdCancel } from "react-icons/md";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 after:content-[''] after:w-screen after:h-screen after:bg-gray-500 after:absolute after:left-0 after:top-0 after:opacity-60 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="relative z-50 w-[370px] md:w-[600px] bg-white shadow-2xl border-alternative p-8 rounded-3xl">
          <div className="absolute top-3 right-3">
            <button onClick={() => setIsSearchModal(false)}>
              <MdCancel
                className="hover:text-primary transition-all"
                size={25}
              />
            </button>
          </div>
          <Title addClass={"text-[40px] text-center"}>Search</Title>
          <input
            type="text"
            placeholder="search..."
            className="capitalize border-yellow-400 border center w-full px-2 py-1 my-5 focus-visible:outline-none rounded-lg"
          />
          <ul>
            <li className="flex items-center justify-between p-1 rounded-lg h-[50px] hover:bg-primary transition-all">
              <Image src="/images/f1.png" alt="Meal" width={48} height={48} />
              <span className="font-bold">SJW Pizza</span>
              <span className="font-semibold">$42</span>
            </li>
            <li className="flex items-center justify-between p-1 rounded-lg h-[50px] hover:bg-primary transition-all">
              <Image src="/images/f2.png" alt="Meal" width={48} height={48} />
              <span className="font-bold">SJW Burger</span>
              <span className="font-semibold">$39</span>
            </li>
            <li className="flex items-center justify-between p-1 rounded-lg h-[50px] hover:bg-primary transition-all">
              <Image src="/images/f3.png" alt="Meal" width={48} height={48} />
              <span className="font-bold">Karen Pizza</span>
              <span className="font-semibold">$24</span>
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
