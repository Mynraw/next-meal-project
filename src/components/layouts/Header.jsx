import { useState } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import DropdownMenu from "../ui/DropdownMenu";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { FaUserAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);

  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 left-0 h-full w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="hero bg"
          quality={100}
          fill
          style={{
            objectFit: "cover",
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
                <Link href="/home">home</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="/menu">menu</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="/about">about</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="/reservation">book table</Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-5 items-center">
            <div className="dropdown group w-4 h-4">
              <FaUserAlt className="cursor-pointer hover:text-primary transition-all" />
              <ul className="dropdown-menu absolute hidden mt-1 text-black group-hover:block group-hover:transition-all">
                <li className="">
                  <Link
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/settings"
                  >
                    Settings
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/auth"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="/" className="hover:text-primary transition-all">
              <GiShoppingBag />
            </Link>
            <button
              onClick={() => {
                setIsSearchModal(true);
                setIsDropdownMenu(false);
              }}
              className="hover:text-primary transition-all"
            >
              <BsSearch />
            </button>
            <Link
              href="https://getir.com/yemek/restoran/food-homemade-burger-eryaman-mah-etimesgut-ankara/"
              target="_blank"
              className="btn-primary capitalize hidden sm:inline-block"
            >
              order online
            </Link>
            <button
              className="text-2xl inline-block lg:hidden hover:animate-pulse"
              onClick={() => setIsDropdownMenu(!isDropdownMenu)}
            >
              <Hamburger
                toggled={isDropdownMenu}
                toggle={setIsDropdownMenu}
                size={24}
              />
            </button>
          </div>
        </div>
        {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
        <DropdownMenu
          isDropdownMenu={isDropdownMenu}
          setIsDropdownMenu={setIsDropdownMenu}
        />
      </header>
    </div>
  );
};

export default Header;
