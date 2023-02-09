import OutsideClickHandler from "react-outside-click-handler";
import { AiFillHome } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";
import { BsInfoSquareFill } from "react-icons/bs";
import { MdDinnerDining } from "react-icons/md";

const DropdownMenu = ({ setIsDropdownMenu }) => {
  return (
    <div className="grid place-content-center">
      <nav className="relative w-screen h-screen text-lg p-5 bg-[#F9B420] grid items-center">
        <ul className="grid items-center gap-4 uppercase text-alternative">
          <li className="hover:text-secondary transition-all">
            <a href="#" className="flex justify-center items-center gap-3">
              <AiFillHome size={24} />
              <span>home</span>
            </a>
          </li>
          <div className="border-b border-alternative w-[75px]" />
          <li className="hover:text-secondary transition-all">
            <a href="#" className="flex justify-center items-center gap-3">
              <GiBookCover size={24} />
              <span>menu</span>
            </a>
          </li>
          <div className="border-b border-alternative w-[90px]" />
          <li className="hover:text-secondary transition-all">
            <a href="#" className="flex justify-center items-center gap-3">
              <BsInfoSquareFill size={24} />
              <span>about</span>
            </a>
          </li>
          <div className="border-b border-alternative w-[105px]" />
          <li className="hover:text-secondary transition-all">
            <a href="#" className="flex justify-center items-center gap-3">
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
