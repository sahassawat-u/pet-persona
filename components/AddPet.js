import { XCircleIcon } from "@heroicons/react/solid";

function AddPet({ isActive, callBack }) {
  const onTrigger = () => {
    callBack(!isActive);
  };
  return (
    <div
      className={`${
        !isActive && "hidden"
      } flex absolute top-0 z-50 left-0 right-0 bottom-0 m-auto
    h-96 w-96 bg-[#E0C9A6] flex-col border-2 `}
    >
      <div className="flex justify-end ">
        <XCircleIcon
          onClick={onTrigger}
          className="h-6 w-6 m-1 hover:scale-110 text-white cursor-pointer"
        />
      </div>
      <div className=" justify-center flex">
        <p className="text-white">Add Pet</p>
      </div>
      <div className="m-5 space-y-5">
        <p className="border-b text-white">Name: </p>
        <p className="border-b text-white">Age: </p>
        <p className="border-b text-white">Weight: kg</p>
        <p className="border-b text-white">Favorite food: </p>
        <p className="border-b text-white">Loved place: </p>
        <p className="border-b text-white">Characteristic: </p>
      </div>
    </div>
  );
}

export default AddPet;
