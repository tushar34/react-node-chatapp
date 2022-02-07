import React, { useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
import { useNavigate } from "react-router-dom";
function Join() {
  const [username, setusername] = useState("");
  const [room, setroom] = useState("");
  const navigate = useNavigate();

  // const socket = io.connect("http://localhost:8000");

  const createRoom = () => {
    // var data = {
    //   username: username,
    //   room: room,
    //   socketid: socket.id,
    // };
    // socket.emit("createRoom", { room });
    navigate("/Chat", { state: { room: room, username: username } });
  };

  return (
    // <div className="main_join">
      <div className="join">
        <h1>Join Room</h1>

        <div className="join_box">
          <div className="join_detail">
            <span style={{ textAlign: "start", margin: "5px 5px" }}>
              Enter User-name
            </span>
            <input
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              style={{ margin: "5px 5px", outline: "none" }}
            ></input>
          </div>

          <div className="join_detail">
            <span style={{ textAlign: "start", margin: "5px 5px" }}>
              Enter Room-name
            </span>
            <input
              type="text"
              value={room}
              onChange={(e) => setroom(e.target.value)}
              style={{ margin: "5px 5px", outline: "none" }}
            ></input>
          </div>

          <div
            style={{
              margin: "10px",
              display: username && room ? "block" : "none",
            }}
          >
            <button className="submit-btn" type="submit" onClick={createRoom}>
              Enter
            </button>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Join;
