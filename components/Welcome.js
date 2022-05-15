import Image from "next/image";
function Welcome() {
  return (
    <div className=" flex justify-between md:justify-evenly border-b-4">
      {/* Image */}
      <div className=" flex">
        <div className="relative hidden h-44 w-52 m-10 bg-transparent lg:inline-grid">
          <Image
            layout="fill"
            src="https://c.neh.tw/thumb/f/720/5101027095216128.jpg"
            objectFit="contain"
          />
        </div>
        <div className="relative w-44 h-44 m-10 bg-transparent">
          <Image
            objectFit="contain"
            layout="fill"
            src="https://images8.alphacoders.com/720/thumb-1920-720980.jpg"
          />
        </div>
      </div>
      <div className="">
        <div className="relative w-64 h-32 mt-3 md:h-40">
          {/* Welcome text */}
          <Image
            src="https://thumbs.dreamstime.com/b/welcome-calligraphy-lettering-decorative-elements-branches-black-color-isolated-motivational-text-template-logotype-130355867.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Login */}
        <p className="mx-3 max-w-xs text-[#121212] text-sm flex ">
          Personalize your pet by providing suggestions and improve their
          overview health together{" "}
        </p>
        <button className="text-white font-bold rounded-lg p-1 px-3 float-right mr-4 bg-yellow-500 hover:bg-yellow-300">
          Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
