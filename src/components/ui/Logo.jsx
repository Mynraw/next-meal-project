import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <h1 className="text-white font-permaMarker text-[2rem]">
        <Link href="/home">
          <span className="text-orange-500">SJW</span>Burger
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
