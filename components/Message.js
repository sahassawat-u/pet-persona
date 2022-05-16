import Image from "next/image";

function Message({ name, isUser }) {
  return (
    <div className={`flex items-center ${isUser && "justify-end"}`}>
      <div className={`relative h-16 w-16 ${isUser && "order-last"}`}>
        <Image
          className="rounded-full border-b-2 border-b-gray-5 cursor-pointer hover:opacity-75"
          layout="fill"
          src={`https://avatars.dicebear.com/api/pixel-art/${name}.svg`}
        />
      </div>
      <p className="">Hello There</p>
    </div>
  );
}

export default Message;
