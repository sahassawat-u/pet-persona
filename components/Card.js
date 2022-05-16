import { PencilAltIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";
import AddPet from "./AddPet";

function Card() {
  const [isActive, setIsActive] = useState(false);
  const parentCallback = (_isActive) => {
    setIsActive(_isActive);
  };
  return (
    // <div className=" bg-blue-300 w-64 h-64">
    <div>
      <div
        className="   
         border-dashed border-2 
         border-blue-300
         relative
         min-w-[300px]
         min-h-[300px]"
      >
        <div className="mx-2  flex flex-col">
          <div className=" flex justify-center mt-5">
            <div className="relative h-24 w-24">
              <Image
                objectFit="cover"
                layout="fill"
                src="https://i1.sndcdn.com/avatars-000600452151-38sfei-t500x500.jpg"
              />
            </div>
          </div>
          <div className="p-3">
            <p className="">Name: Junny</p>
            <p className="">Age: 5</p>
            <p className="">Weight: 20 kg</p>
            <p className="">Favorite food: Fish</p>
            <p className="">Loved place: Home</p>
            <p className="">Characteristic: Big eyes</p>
          </div>
        </div>
        <div className="absolute top-3 right-5 ">
          <PencilAltIcon
            onClick={() => setIsActive(!isActive)}
            className="h-6 w-6 cursor-pointer hover:scale-125 text-blue-400"
          />
        </div>
      </div>
      <AddPet isActive={isActive} callBack={parentCallback} />
    </div>
    // </div>
  );
}

export default Card;
