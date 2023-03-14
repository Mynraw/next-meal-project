import { useState } from "react";
import axios from "axios";
import { signOut, useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Account from "./Account";
import Password from "./Password";
import Orders from "./Orders";
import Image from "next/image";
import Title from "../../components/ui/Title";
import { AiFillHome } from "react-icons/ai";
import { HiKey } from "react-icons/hi";
import { RiEBike2Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

const Index = ({ user }) => {
  const [menuTab, setMenuTab] = useState(0);
  const [tabTitle, setTabTitle] = useState("account settings");
  const { push } = useRouter();

  const handleLogOut = () => {
    if (confirm("You really want to logout?")) {
      // without redirect indication push wouldn't work.
      signOut({ redirect: false });
      toast("Successfully logged out.", { theme: "dark" });
      push("/home");
    }
  };

  const handleTabs = (tab) => {
    setMenuTab(tab);
    switch (tab) {
      case 0:
        setTabTitle("account settings");
        break;
      case 1:
        setTabTitle("password");
        break;
      case 2:
        setTabTitle("orders");
        break;
      default:
        break;
    }
  };

  const style = {
    borderRadius: "50%",
    objectFit: "cover",
  };

  const sizes = `(max-width: 768px) 100vw,
  (max-width: 1200px) 50vw,
  33vw`;

  return (
    <div className="py-16">
      <div className="px-10 grid grid-cols-5 items-center gap-y-8 md:gap-x-8">
        <div className="flex flex-col gap-3 col-span-5 md:col-span-1 border border-gray-300 pt-5">
          <div className="relative w-24 h-24 mx-auto">
            <Image
              src={"/images/kekw.jpg"}
              alt="goat"
              sizes={sizes}
              fill
              style={style}
            />
          </div>
          <div className="mx-auto">
            <span className="text-2xl font-bold">{user.fullName}</span>
          </div>
          <div className="text-black">
            <button
              onClick={() => handleTabs(0)}
              className={`account flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-[#f9b420] hover:text-white transition-all ${
                menuTab === 0 && "bg-[#f9b420] text-white"
              }`}
            >
              <AiFillHome />
              <span className="capitalize">account</span>
            </button>
            <button
              onClick={() => handleTabs(1)}
              className={`account flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-[#f9b420] hover:text-white transition-all ${
                menuTab === 1 && "bg-[#f9b420] text-white"
              }`}
            >
              <HiKey />
              <span className="capitalize">password</span>
            </button>
            <button
              onClick={() => handleTabs(2)}
              className={`account flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-[#f9b420] hover:text-white transition-all ${
                menuTab === 2 && "bg-[#f9b420] text-white"
              }`}
            >
              <RiEBike2Fill />
              <span className="capitalize">orders</span>
            </button>
            <button
              onClick={handleLogOut}
              className={`account flex items-center gap-2 py-3 px-2 w-full border-t border-gray-300 hover:bg-[#f9b420] hover:text-white transition-all`}
            >
              <MdLogout />
              <span className="capitalize">Logout</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 md:col-span-4 h-full">
          <Title addClass={"text-4xl text-left"}>{tabTitle}</Title>
          {menuTab === 0 && <Account />}
          {menuTab === 1 && <Password />}
          {menuTab === 2 && <Orders />}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
  );

  return {
    props: {
      session,
      user: user ? user.data : null,
    },
  };
};

export default Index;
