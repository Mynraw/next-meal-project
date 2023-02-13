import { AiFillHome } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";
import { BsInfoSquareFill } from "react-icons/bs";
import { MdDinnerDining } from "react-icons/md";

const DropdownMenu = ({ isDropdownMenu }) => {
  return (
    <div
      className={`relative grid z-50 top-[-150vh] place-content-center transition-all duration-500 ${
        isDropdownMenu && "menu-landing"
      }`}
    >
      <nav className="w-screen h-screen text-lg p-5 bg-[#F9B420] grid place-content-center">
        <ul className="flex flex-col items-end gap-4 uppercase text-alternative">
          <li className="hover:text-secondary transition-all w-36">
            <a href="#" className="flex justify-between items-center">
              <AiFillHome size={24} />
              <span>home</span>
            </a>
          </li>
          <div className="border-b border-alternative w-[54px]" />
          <li className="hover:text-secondary transition-all w-36">
            <a href="#" className="flex items-center justify-between">
              <GiBookCover size={24} />
              <span>menu</span>
            </a>
          </li>
          <div className="border-b border-alternative w-[80px]" />
          <li className="hover:text-secondary transition-all w-36">
            <a href="#" className="flex justify-between items-center">
              <BsInfoSquareFill size={24} />
              <span>about</span>
            </a>
          </li>
          <div className="border-b border-alternative w-[106px]" />
          <li className="hover:text-secondary transition-all w-36">
            <a href="#" className="flex justify-between items-center">
              <MdDinnerDining size={24} />
              <span>book table</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DropdownMenu;
