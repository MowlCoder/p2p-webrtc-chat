const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const ACTIONS = require('./src/socket/actions');
const PORT = process.env.PORT || 3001;

function getClientRooms() {
    const { rooms } = io.sockets.adapter;

    return Array.from(rooms.keys());
}

function shareRoomsInfo() {
    io.emit(ACTIONS.SHARE_ROOMS, {
        rooms: getClientRooms(),
    });
}

io.on('connection', (socket) => {
    shareRoomsInfo();
});

server.listen(PORT, () => {
    console.log(`Server was started on port ${PORT}`);
});
