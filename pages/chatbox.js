import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Contact from "../components/Contact";
import Message from "../components/Message";
import SendMessage from "../components/SendMessage";
function chatbox() {
  const router = useRouter();
  return (
    <div className="">
      <Contact />
      <div className=" mt-16 rounded-lg  border-2 bg-red-200">
        <ArrowNarrowLeftIcon
          onClick={() => router.push("/")}
          className="h-5 w-5 ml-4 mt-4 cursor-pointer hover:scale-110"
        />
        <div className="border-b  p-5 mt-3">
          <p className="">Chat Box</p>
        </div>
        <div className=" p-5 space-y-5 ">
          <Message name={1} isUser={true} />
          <Message name={25} isUser={false} />
          <Message name={555} isUser={false} />
        </div>
        <div className="mt-5 ">
          <SendMessage />
          {/* <p>Send messages</p> */}
        </div>
      </div>
    </div>
  );
}

export default chatbox;
