const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const port = process.env.PORT || 4001;
const index = require("./index");


const app = express();
app.use(index);


const server = http.createServer(app);
const socketServer = socketIo(server);


socketServer.on("connection", socket => {
  console.log("New client connected"), setInterval(
    () => getApiAndEmit(socket),
    10000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});


const getApiAndEmit = async socket => {
    try {
      const res = await axios.get(
        "https://api.darksky.net/forecast/2df4123867420b94e33ce40eee466da9/33.7490,-84.3880"
      ); // Getting the data from DarkSky
        
      socket.emit("FromAPI", res.data.currently.temperature); // Emitting a new message. It will be consumed by the client
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  };


server.listen(port, () => console.log(`Listening on port ${port}`));


