import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-4">
      <Image
        src="/logo.png"
        alt=""
        width={100}
        height={25}
        className=" hidden lg:block"
      />
      <Image
        src="/logo2.png"
        alt=""
        width={35}
        height={35}
        className="block lg:hidden"
      />
      <button className="bg-black font-semibold text-white px-4 py-2 rounded">
        Get Started
      </button>
    </div>
  );
};
export default Navbar;
