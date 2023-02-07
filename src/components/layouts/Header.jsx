import { useState } from "react";
import Title from "../ui/Title";
import Logo from "../ui/Logo";
import OutsideClickHandler from "react-outside-click-handler";
import { FaUserAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  return (
    <div className="h-[5.5rem] bg-alternative">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav>
          <ul className="flex gap-8 uppercase">
            <li className="hover:text-primary">
              <a href="#">home</a>
            </li>
            <li className="hover:text-primary">
              <a href="#">menu</a>
            </li>
            <li className="hover:text-primary">
              <a href="#">about</a>
            </li>
            <li className="hover:text-primary">
              <a href="#">book table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5 items-center">
          <a href="" className="hover:text-primary">
            <FaUserAlt />
          </a>
          <a href="" className="hover:text-primary">
            <GiShoppingBag />
          </a>
          <button
            onClick={() => setIsSearchModal(true)}
            className="hover:text-primary"
          >
            <BsSearch />
          </button>
          <a href="" className="btn-primary capitalize">
            order online
          </a>
        </div>
      </div>
      {isSearchModal && (
        <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
          <div className="">
            <Title addClass={"text-red-500"}>Search</Title>
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default Header;
