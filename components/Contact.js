import {
  BellIcon,
  BookOpenIcon,
  BriefcaseIcon,
  MailIcon,
  MenuAlt1Icon,
  PhoneIcon,
  SearchIcon,
} from "@heroicons/react/solid";

function Contact() {
  return (
    <div className="  bg-yellow-500 flex justify-between px-3 md:px-32 py-1">
      {/* Left items */}
      <div className="flex space-x-2 items-center">
        <div className="flex space-x-1  cursor-pointer">
          <PhoneIcon className="text-gray-800 h-4 w-4" />
          <p className="text-gray-800 text-xs">09x-xxx-xxx</p>
        </div>
        <div className="flex space-x-1  cursor-pointer">
          <MailIcon className="text-gray-800 h-4 w-4" />
          <p className="text-gray-800 text-xs"> example.u@gmail.com</p>
        </div>
      </div>
      {/* Right items */}
      <div className=" flex  items-center cursor-pointer lg:space-x-8">
        <div className="flex space-x-1 ">
          <BellIcon className="text-gray-800 h-4 w-4" />
          <BookOpenIcon className="text-gray-800 h-4 w-4" />
          <BriefcaseIcon className="text-gray-800 h-4 w-4" />
        </div>
        <div className="flex space-x-1  ml-1">
          <SearchIcon className="text-gray-800 h-4 w-4 " />
          <MenuAlt1Icon className="text-gray-800 h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
