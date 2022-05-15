import Image from "next/image";

function Navbar() {
  return (
    <div className="flex justify-around content-center bg-[rgba(255,241,220,255)] botder-b shadow-md ">
      {/* Logo */}
      <div className="relative h-16 w-24 ">
        <Image
          className="  hover:scale-110"
          src="https://i.pinimg.com/originals/af/fb/c9/affbc96be98edecba473e0e630069b3b.png"
          // width={60}
          // height={60}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Menu */}
      <div className="flex space-x-3  md:space-x-7 lg:space-x-20 items-center">
        <h3 className="cursor-pointer hover:scale-110 text-sm">HOME</h3>
        <h3 className="cursor-pointer hover:scale-110 text-sm">PAGES</h3>
        <h3 className="cursor-pointer hover:scale-110 text-sm">CHATBOT</h3>
        <h3 className="cursor-pointer hover:scale-110 text-sm">CONTACT US</h3>
      </div>
    </div>
  );
}

export default Navbar;
