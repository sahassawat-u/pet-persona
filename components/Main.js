import Image from "next/image";
import { useRouter } from "next/router";

function Main() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/Login");
  };
  return (
    <div className="h-[550px] grid grid-cols-3 p-5 bg-blak height-100%">
      <div
        className=" bg-gradient-to-b col-span-2 
      from-[#6491E8] to-opacity-0 relative
      rounded-lg"
      >
        {/* Images */}
        <div className="absolute left-12 top-3 shadow-md p-3 transform transition duration-300 hover:scale-110">
          <Image
            className=""
            objectFit="cover"
            width={350}
            height={250}
            src="https://www.thesprucepets.com/thmb/et0R6AiQHOqP9s4WGHcfKBDPjVo=/2667x2000/smart/filters:no_upscale()/cute-teacup-dog-breeds-4587847-hero-4e1112e93c68438eb0e22f505f739b74.jpg"
          />
        </div>
        <div className=" absolute bottom-0 right-10 p-3 shadow-md transform transition duration-300 hover:scale-110">
          <Image
            className="rounded-lg "
            objectFit="cover"
            width={400}
            height={230}
            src="https://freshheadline.com/wp-content/uploads/2021/08/31-6-784x441.jpg"
          />
        </div>
      </div>

      <div className="flex flex-col pl-5 justify-center items-center">
        {/* Texts */}
        <div className="flex flex-row items-center">
          <h1 className="font-bold text-[#7A88D3] text-4xl mr-3">
            We know pets
            <br /> are part of
            <br /> your family
          </h1>
          <div className="mr-12 grid grid-cols-2">
            <div className="row-start-1 row-span-1">
              <Image
                width={30}
                height={30}
                src="https://cdn-icons-png.flaticon.com/512/38/38499.png"
              />
            </div>
            <div className="row-start-2 col-start-2 ">
              <Image
                width={25}
                height={25}
                src="https://cdn-icons-png.flaticon.com/512/38/38499.png"
              />
            </div>
          </div>
        </div>
        <p className="text-[#7A88D3] text-lg">
          Love and care for your pet by providing some facts of how to take care
          of your pet from the very first step.{" "}
        </p>
        {/* Login button */}
        <button
          onClick={handleClick}
          className="bg-purple-300 mt-5 rounded-sm py-1 px-6 ease-in duration-300 hover:scale-110"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Main;
