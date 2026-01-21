import {Server} from 'socket.io';

// import socket feature modules
import registerRoomSocket from '../sockets/room.socket.js';
// import registerTextSocket from '../sockets/text.socket.js';

export default function setupSocket (server) {

    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });

    console.log("Socket.IO initialized...");

    io.on("connection", (socket) => {
        console.log("User connected: ", socket.id);

        // Register feature specific socket logic
        registerRoomSocket(io, socket);
        registerTextSocket(io, socket);

        socket.on("disconnect", () => {
            console.log("User disconnected: ", socket.id);
        });
    });
}