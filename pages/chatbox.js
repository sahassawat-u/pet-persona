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
      <div className=" flex justify-center bg-purple-20 h-[40rem] relative">
        <div
          className="bg-red-20 mt-16  rounded-lg border-2 flex-auto max-w-2xl 
          overflow-y-scroll"
        >
          {/* <div className="sticky top-0 black"> */}
          <ArrowNarrowLeftIcon
            onClick={() => router.push("/")}
            className="h-5 w-5 ml-4 mt-4 cursor-pointer hover:scale-110 sticky top-0"
          />
          <div className="border-b  p-5 mt-3">
            <p className="">Chat Box</p>
          </div>
          {/* </div> */}
          <div className=" p-5 space-y-3 ">
            <div className=" ">
              <Message name={1} isUser={true} />
              <Message name={25} isUser={false} />
              <Message name={555} isUser={false} />
              <Message name={25} isUser={true} />
              <Message name={25} isUser={false} />
              <Message name={555} isUser={false} />
              <Message name={555} isUser={false} />
              <Message name={555} isUser={false} />
              <Message name={555} isUser={false} />
            </div>
          </div>
          <div className=" absolute bottom-2 w-full">
            <SendMessage />
            {/* <p>Send messages</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default chatbox;
