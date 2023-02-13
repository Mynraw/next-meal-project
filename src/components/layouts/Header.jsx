import { useState } from "react";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import DropdownMenu from "../ui/DropdownMenu";
import Image from "next/image";
import Carousel from "../ui/Carousel";
import { Squash as Hamburger } from "hamburger-react";
import { FaUserAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);
  // Hamburger
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 left-0 h-full w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="hero bg"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            // objectPosition: isDropdownMenu ? "right top" : "center",
            objectPosition: "center",
          }}
        />
      </div>
      <header className="relative top-0 left-0 h-[5.5rem] w-full px-1">
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
            <a href="" className="hover:text-primary transition-all">
              <FaUserAlt />
            </a>
            <a href="" className="hover:text-primary transition-all">
              <GiShoppingBag />
            </a>
            <button
              onClick={() => {
                setIsSearchModal(true);
                setIsDropdownMenu(false);
              }}
              className="hover:text-primary transition-all"
            >
              <BsSearch />
            </button>
            <a
              href=""
              className="btn-primary capitalize hidden sm:inline-block"
            >
              order online
            </a>
            <button
              className="text-2xl inline-block lg:hidden hover:animate-pulse"
              onClick={() => setIsDropdownMenu(!isDropdownMenu)}
            >
              <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
            </button>
          </div>
        </div>
        {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
        <DropdownMenu
          isDropdownMenu={isDropdownMenu}
          setIsDropdownMenu={setIsDropdownMenu}
        />
      </header>
      <Carousel />
    </div>
  );
};

export default Header;
