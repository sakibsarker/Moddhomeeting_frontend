import io from 'socket.io-client';

const SERVER="http://localhost:5000/";

let socket=null;

export const connectWithSocketIOServer=()=>{
    socket=io(SERVER)

    socket.on('connect',()=>{
        console.log('Successfully connected with socket io server')
        console.log(socket.id);
    })
}