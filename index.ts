import express from 'express';
import {Server} from 'http';
import { DisconnectReason, Server as s, Socket } from 'socket.io';
import { TAG } from './data/utils/Const';
import { User } from './data/models/User';

let app = express;
let server = new Server(app);
const io = new s(server);
const port = 8080;

const users : User[] = [];

server.listen(port, function () {
    console.log('listening on port', port);
    init();
})

function init() {
    io.on('connection', function(socket : Socket) {
        console.log('connection', socket);
        socket.emit(TAG.USER_IN, socket.id);
        socket.on('disconnect', function(reason : DisconnectReason, description? : any) {
            console.log('disconnect', reason, description);
        });
    });
}
