import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";
import { BsInfoSquareFill } from "react-icons/bs";
import { MdDinnerDining } from "react-icons/md";

const DropdownMenu = ({ isDropdownMenu, setIsDropdownMenu, setOpen }) => {
  return (
    <div
      className={`relative grid z-50 top-[-150vh] place-content-center transition-all duration-500 ${
        isDropdownMenu && "menu-landing"
      }`}
    >
      <nav className="w-screen h-screen text-lg p-5 bg-[#F9B420] grid place-content-center">
        <ul className="flex flex-col items-end gap-4 uppercase text-alternative">
          <li className="hover:text-secondary transition-all w-36">
            <Link
              href="/home"
              className="flex justify-between items-center"
              onClick={() => setIsDropdownMenu(false)}
            >
              <AiFillHome size={24} />
              <span>home</span>
            </Link>
          </li>
          <div className="border-b border-alternative w-[54px]" />
          <li className="hover:text-secondary transition-all w-36">
            <Link
              href="/menu"
              className="flex items-center justify-between"
              onClick={() => setIsDropdownMenu(false)}
            >
              <GiBookCover size={24} />
              <span>menu</span>
            </Link>
          </li>
          <div className="border-b border-alternative w-[80px]" />
          <li className="hover:text-secondary transition-all w-36">
            <Link
              href="/about"
              className="flex justify-between items-center"
              onClick={() => setIsDropdownMenu(false)}
            >
              <BsInfoSquareFill size={24} />
              <span>about</span>
            </Link>
          </li>
          <div className="border-b border-alternative w-[106px]" />
          <li className="hover:text-secondary transition-all w-36">
            <Link
              href="/reservation"
              className="flex justify-between items-center"
              onClick={() => setIsDropdownMenu(false)}
            >
              <MdDinnerDining size={24} />
              <span>book table</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DropdownMenu;
