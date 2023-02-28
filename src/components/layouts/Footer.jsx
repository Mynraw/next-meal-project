import Title from "../ui/Title";
import Link from "next/link";
import { ImLocation2 } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-alternative">
      <div className="container mx-auto pt-16 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-0 text-white">
          <div className="flex items-center flex-col gap-3">
            <Title addClass={"text-3xl mb-2"}>contact us</Title>
            <Link
              href={""}
              className="flex items-center gap-2 hover:text-primary transition-all"
            >
              <ImLocation2 />
              <span className="capitalize">location</span>
            </Link>
            <Link
              href={""}
              className="flex items-center gap-2 hover:text-primary transition-all"
            >
              <BsTelephoneFill />
              <span className="capitalize">call +03 87162121</span>
            </Link>
            <Link
              href={""}
              className="flex items-center gap-2 hover:text-primary transition-all"
            >
              <GrMail />
              <span>mynraw@outlook.com</span>
            </Link>
          </div>
          <div className="flex items-center flex-col gap-3">
            <Title addClass={"text-3xl mb-2"}>sjw burger</Title>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              culpa aut, praesentium voluptas saepe tempore quis quo corrupti
              voluptatem perferendis.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Link
                href={""}
                className="flex items-center text-xl bg-primary p-2 rounded-full gap-2 hover:opacity-80 transition-all"
              >
                <FiFacebook />
              </Link>
              <Link
                href={""}
                className="flex items-center text-xl bg-primary p-2 rounded-full gap-2 hover:opacity-80 transition-all"
              >
                <FiTwitter />
              </Link>
              <Link
                href={""}
                className="flex items-center text-xl bg-primary p-2 rounded-full gap-2 hover:opacity-80 transition-all"
              >
                <FiLinkedin />
              </Link>
              <Link
                href={""}
                className="flex items-center text-xl bg-primary p-2 rounded-full gap-2 hover:opacity-80 transition-all"
              >
                <FiInstagram />
              </Link>
              <Link
                href={""}
                className="flex items-center text-xl bg-primary p-2 rounded-full gap-2 hover:opacity-80 transition-all"
              >
                <FiYoutube />
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-col gap-3">
            <Title addClass={"text-3xl mb-2"}>opening hours</Title>
            <span className="block capitalize">everyday</span>
            <span className="block capitalize">10.00 am - 10.00 pm</span>
          </div>
        </div>
        <div className="text-center text-white mt-12">
          <p className="capitalize">
            &copy; 2023 all rights reserved by{" "}
            <Link href="https://github.com/Mynraw" target="_blank">
              <span className="stamp text-2xl pl-1">mynraw</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
