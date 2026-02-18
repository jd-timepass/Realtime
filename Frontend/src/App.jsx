// import './App.css'
import { useEffect, useState } from 'react';
import { socket } from './socket';

function App() {

  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Connected: ", socket.id);
    });

    socket.on("user-joined", (id) => {
      console.log("Another user joined: ", id);
    });

    return () => {
      socket.disconnect();
    };
  }, []);


  const joinRoom = () => {
    socket.emit("join-room", roomId);
  };

  return (
    <div>
      <input
        placeholder='Enter room Id'
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)} />

      <button onClick={joinRoom}> Join Room </button>
    </div>
  );
}

export default App;
