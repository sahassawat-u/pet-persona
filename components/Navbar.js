import Image from "next/image";

function Navbar() {
  return (
    <div className="flex justify-around content-center bg-[#fff1dc] botder-b shadow-md ">
      {/* Logo */}
      <div className="relative h-16 w-24">
        <Image
          src="https://i.pinimg.com/originals/af/fb/c9/affbc96be98edecba473e0e630069b3b.png"
          // width={60}
          // height={60}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Menu */}
      <div className="flex space-x-3  md:space-x-7 lg:space-x-20 items-center">
        <h3 className="cursor-pointer ">HOME</h3>
        <h3 className="cursor-pointer">PAGES</h3>
        <h3 className="cursor-pointer">CHATBOT</h3>
        <h3 className="cursor-pointer">CONTACT US</h3>
      </div>
    </div>
  );
}

export default Navbar;
