import Image from "next/image";
import { useRouter } from "next/router";

function login() {
  const router = useRouter();
  return (
    <div className="grid-rows-2 md:flex justify-between items-center m-auto mt-20 bg-green-20">
      {/* Login */}
      <div className="md:ml-10 bg-red-20 md:w-1/2 ">
        <h1 className="text-4xl mb-5 text-center ">Pet Persona</h1>
        <div className=" md:h-56 flex flex-col items-center md:shadow-lg">
          <input
            type="text"
            placeholder="Enter your email"
            className="text-center my-3 focus:outline-none border-b-2"
          />
          <input
            type="text"
            placeholder="Password"
            className="text-center my-3 focus:outline-none border-b-2"
          />
          <button
            onClick={() => router.push("/")}
            className="bg-gray-800 my-4 text-white px-4 rounded-full py-2 "
          >
            Log in
          </button>
          <button className="font-bold mt-2">Sign Up</button>
        </div>
      </div>
      {/* Image */}
      <div className="">
        <Image
          className=""
          objectFit="cover"
          width={500}
          height={400}
          src="https://thumbs.dreamstime.com/b/cute-siberian-husky-puppy-kissing-cute-kitten-white-background-isolated-68535227.jpg"
        />
      </div>
    </div>
  );
}

export default login;
