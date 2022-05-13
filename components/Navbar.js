function Navbar() {
  return (
    <div>
      <div className="flex flex-row justify-center space-x-24 p-5 ">
        <h1
          onClick={() => console.log("hello")}
          className="my-text-color font-bold text-xl cursor-pointer transition duration-150 ease-out hover:animate-bounce"
        >
          Home
        </h1>
        <h1 className="my-text-color font-bold text-xl cursor-pointer transition duration-150 ease-out hover:animate-bounce">
          About Us
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
