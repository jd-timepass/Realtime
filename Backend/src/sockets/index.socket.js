import roomSocket from './room.socket.js';

export default function registerSocketHandlers(io) {
    io.on("connection", (socket) => {
        console.log("User Connected: ", socket.id);

        roomSocket(io, socket);

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);

        });
    });
}