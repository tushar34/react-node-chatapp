import io from "socket.io-client";
import socketClient from "socket.io-client";

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

function Chat() {
  const location = useLocation();
  const username = location.state.username;
  const roomname = location.state.room;
  const [online_user, setonline_user] = useState([]);
  console.log("online_user", online_user);

  const [messagelist, setmessagelist] = useState([]);
  const [message, setmessage] = useState("");
  // console.log("messagelist",messagelist)

  const socket = useRef();
  // const socket = io()

  // const socket = io.connect("http://localhost:8000",{
  // 'reconnection': true,
  // 'reconnectionDelay': 500,
  // 'reconnectionAttempts': 10,
  // });

  //   const socket = socketClient("http://localhost:8000");
  //   socket.on('connection', () => {
  //     console.log(`I'm connected with the back-end`);
  // });
  useEffect(() => {
    socket.current = io.connect("http://localhost:8000");
  }, []);

  useEffect(() => {
    socket.current.emit("add-user", username);

    socket.current.on("get-user", (user) => {
      // setonline_user({user})
      console.log("usersssss+++++", user);
      setonline_user(user);
    });
  }, [username]);

  // socket.emit("createRoom", { roomname });

  // useEffect(() => {
  //   socket.emit("createRoom", { roomname });
  // },[0]);

  useEffect(() => {
    socket.current.on("msg", (data) => {
      setmessagelist([...messagelist, data]);
    });
  }, [messagelist]);

  const setmsg = async () => {
    const data = {
      sender: username,
      room: roomname,
      message: message,
    };
    socket.current.emit("msg", data);
    // setmessagelist([...messagelist, message]);
    setmessage("");
  };
  return (
    <>
      <Sidebar />
      <p>messenger</p>
      {/* {messagelist.map((msg, i) => {
        return <h6 key={i}>{msg.message}</h6>;
      })} */}
       {/* // return (
            //   <div key={i} className= {username === msg.user?"send":'recive'}   >
            //     <span style={{textAlign:username === msg.user?'right':'left',padding:'10px'}} className="text_msg">{msg.text}</span>
            //     <span className="send-user-name" >{msg.user}</span>
            //   </div>
            // ); */}
      {/* <div className="message_area">
        <div className="message">
          {messagelist.map((msg, i) => {
            return (
              <div
                key={i}
                className={username === msg.user ? "send" : "recive"}
              >
                <span
                  style={{
                    textAlign: username === msg.user ? "right" : "left",
                    padding: "10px",
                  }}
                  className="text_msg"
                >
                  {msg}
                </span>
                <span className="send-user-name">{msg.user}</span>
              </div>
            );
          })}
        </div>
        <div className="bottom-control">
          <textarea
            className="textarea"
            value={message}
            placeholder="Type a new message"
            onChange={(e) => setmessage(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? setmsg() : "")}
          ></textarea>
          <button
            style={{
              width: "12%",
              border: "none",
              borderRadius: "10px",
              border: "1px solid gray",
            }}
            type="button"
            onClick={setmsg}
          >
            send
          </button>
        </div>
      </div> */}

      {/* <div>
        {online_user &&
          online_user.map((user) => (
            <h1 style={{ color: "black" }}>{user.user_name}</h1>
          ))}
      </div> */}
    </>
  );
}

export default Chat;
