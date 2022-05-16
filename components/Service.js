import Image from "next/image";
import { useState } from "react";

function Service() {
  const [isOpenChat, setIsOpenChat] = useState(true);
  return (
    <div className="">
      <h1 className="text-center m-8 text-2xl">Our Services</h1>
      <div className="grid grid-cols-3 lg:grid-cols-2 lg:justify-evenly">
        <div className="flex items-center ml-3 max-w-sm  lg:col-start-2 ">
          <h1 className="text-zinc-500 text-2xl">1.</h1>
          <h2 className="ml-3 ">Manage your pet history</h2>
        </div>
        <div className="flex lg:col-start-1  justify-end">
          <Image
            src="https://i.dlpng.com/static/png/6899861_preview.png"
            width={200}
            objectFit="cover"
            height={200}
          />
        </div>
        <div className="flex items-center max-w-sm ">
          <h1 className="text-zinc-500 text-2xl">2.</h1>
          <h2 className="ml-3">
            Provide advice and suggestions from pet service providers
          </h2>
        </div>
        <div className="flex col-start-2  max-w-sm ">
          <h1 className="text-zinc-500 text-2xl">3.</h1>
          <h2 className="ml-3">
            Consult with 24hr chatbot with related pet questions
          </h2>
        </div>
      </div>
      {/* <div
        className="
      absolute  md:bottom-2 h-72 w-64 
      md:right-20 bg-red-500 
      lg:right-30 lg:bottom-4 rounded-lg"
      >
      </div> */}
    </div>
  );
}

export default Service;
