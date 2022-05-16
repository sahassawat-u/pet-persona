import { PlusCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import AddPet from "./AddPet";
import Card from "./Card";

function Pets() {
  const items = 4;
  //   const isActive = true;
  const [isActive, setIsActive] = useState(false);
  const parentCallback = (_isActive) => {
    setIsActive(_isActive);
  };
  //   console.log(isActive);
  //   const addPet = () => [console.log("hi")];
  return (
    <div className="">
      <div
        className={` p-5 h-96
      space-x-5 
      flex 
       ${items <= 2 && "justify-center"}
       overflow-x-scroll 
     `}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <div className="flex items-center  mt-10">
          <PlusCircleIcon
            onClick={() => setIsActive(!isActive)}
            className="h-10 w-10 cursor-pointer hover:scale-110
      text-blue-300"
          />
        </div>
      </div>

      {/* */}
      <AddPet isActive={isActive} callBack={parentCallback} />
      {/* </div> */}
    </div>
  );
}

export default Pets;
