import { useEffect, useState } from "react";
import { Slice } from "lucide-react";
import generateRandomChat from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { setChatMessage } from "../utils/youtubeSlice";

const LiveChat = () => {
  const [message, setMessage] = useState("");
  const [userName, setUseName] = useState("");
  const chatmessages = useSelector((store) => store.youtube.chatMessage);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const interval = setInterval(() => {
      // setMessages((prev = []) => {
      //   const prevMessages = Array.isArray(prev) ? prev : [];
      //   return [generateRandomChat(), ...prevMessages.slice(0, 19)];
      // });
      dispatch(setChatMessage(generateRandomChat()));

    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="h-[405px] bg-gray-100 p-1 rounded-lg mt-2  shadow-md">
      <div className=" h-80 w-full overflow-y-scroll">
        <h2 className="font-bold">Live Chat</h2>
        <div className="space-y-2">
          {chatmessages?.map((msg, index) => (
            <div
              key={index}
              className="flex items-center p-1 bg-white shadow rounded"
            >
              <img
                src={msg.avatar}
                alt="Avatar"
                className="w-6 h-6 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{msg.name}</h3>
                <p>{msg.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form
        className="w-full flex mt-4 p-2"
        onSubmit={(e) => {
          e.preventDefault();
          const { avatar } = generateRandomChat();
          dispatch(
            setChatMessage({
              name: userName,
              message: message,
              avatar: avatar,
            })
          );
          setMessage("");
          setUseName("");
        }}
      >
        <input
          className="pl-2 m-1 border border-black w-full rounded-lg"
          type="text"
          required
          value={userName}
          placeholder="User Name"
          onChange={(e) => setUseName(e.target.value)}
        />
        <input
          required
          className="pl-2 m-1 border border-black w-full rounded-lg"
          type="text"
          value={message}
          placeholder="Your Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="px-4 py-2 m-1 bg-green-400 rounded-lg ">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
