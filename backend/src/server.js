const app = require("express")();
const server= require('http').createServer(app);

const PORT = 8000;
const  io = require('socket.io')(server,{
    cors: {
        origin: "http://localhost:3000"
      }
});

let users= []

const add_user = (user_name,socket_id) =>{
!users.some((user)=>user.user_name === user_name) &&
  users.push({user_name,socket_id})
}

const remove_user = (id) =>{
  users= users.filter((user)=>user.socket_id !== id)
}

io.on('connection', (socket)=>{
    console.log('socket id',socket.id);
    // console.log('connected........');
    // console.log('room',socket.rooms);
    // socket.on("private message", (anotherSocketId, msg) => {
    //   socket.to(anotherSocketId).emit("private message", socket.id, msg);
    // });
    socket.on('add-user', (user) => {
      add_user(user,socket.id)
      io.emit('get-user',users)
    })

    socket.on("createRoom", (data)=>{
        // console.log("dddd",data)
        socket.join(data.roomname)
    })

    socket.on("msg",(data)=>{
      // console.log("message recive",data)
      // socket.to(data.room).emit("msg",
      // {
      //   text:data.message,
      //   user:data.sender,
      // }
      // )
      // console.log("id",anotherSocketId)
      // console.log("the message is",data)
      io.emit('msg',data.message)
      // io.sockets.in(data.room).emit('msg', data.message);

    })
    socket.on('disconnect', () => {
      // res.status(404).json({'error':"not found"})
       remove_user(socket.id)
        io.emit('get-user',users)
       console.log('A user disconnected');
    });
 }); 


 server.listen(PORT, () => {
  console.log(`connected. port number is ${PORT}`);
});
