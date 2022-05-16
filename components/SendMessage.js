import { useState } from "react";

function SendMessage() {
  const [message, setMessage] = useState();
  return (
    <div
      className="flex  
     px-3 py-2 max-w-2xl "
    >
      <input
        className="flex-grow  outline-none text-gray-500
      placeholder-gray-500 px-5"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Type something `}
      />
      <button
        type="submit"
        // onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </div>
  );
}

export default SendMessage;
