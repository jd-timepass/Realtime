export default function roomSocket(io, socket) {

    socket.on("join-room", (roomId) => {
        socket.join(roomId);
        console.log(`User ${socket.id} joined room ${roomId}`);

        socket.to(roomId).emit("user-joined", socket.id);
    });

    socket.on("leave-room", (roomId) => {
        socket.leave(roomId);
        console.log(`User ${socket.io} left room ${roomId}`);

        socket.to(roomId).emit("user-left", socket.id);
    });
}