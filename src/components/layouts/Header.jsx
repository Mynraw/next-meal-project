import { useState } from "react";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import DropdownMenu from "../ui/DropdownMenu";
import { FaUserAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);
  return (
    <div className="h-[5.5rem] bg-alternative">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav className="hidden lg:inline-block text-sm">
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
          <a href="" className="btn-primary capitalize hidden sm:inline-block">
            order online
          </a>
          <button
            className="text-2xl inline-block lg:hidden"
            onClick={() => setIsDropdownMenu(!isDropdownMenu)}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
      {isDropdownMenu && <DropdownMenu setIsDropdownMenu={setIsDropdownMenu} />}
    </div>
  );
};

export default Header;
