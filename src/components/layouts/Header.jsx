import Logo from "../ui/Logo";
import { FaUserAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

const Header = () => {
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
          <a href="" className="hover:text-primary">
            <BsSearch />
          </a>
          <a href="" className="btn-primary">
            Order Online
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
