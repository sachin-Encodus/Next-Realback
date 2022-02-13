require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
cron = require("node-cron");
const cors = require("cors");
const port = process.env.PORT || 5000;
const morgan = require("morgan");
const connection = require("./src/db/conn");
const Emitter = require("events");
const cookieParser = require("cookie-parser");
// const { createProxyMiddleware } = require("http-proxy-middleware");
// const static_path = path.join(__dirname, "../public");
// app.use(
//   "/api",
//   createProxyMiddleware({
//     target: "http://localhost:3000",
//     changeOrigin: true,
//   })
// );
// app.use(express.static(static_path));
// !event emitter
app.use(cookieParser());
const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
const EventEmitter = new Emitter();
//  app.use(function (req, res, next) {
//    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//    res.header(
//      "Access-Control-Allow-Headers",
//      "Origin, X-Requested-With, Content-Type, Accept"
//    );
//    next();
//  });
app.set("eventemitter", EventEmitter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors({ credentials: true ,origin: true}));
// app.options("*", cors({ credentials: true, origin: true }));

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New User connected: ", socket.id);

  socket.on("join", (email) => {
    console.log("socket.io: user join ", email);
  });

  EventEmitter.on("orderUpdated", (data) => {
    // console.log("===============xxxxxxxx", data.email);
    socket.emit("Updated", data);
  });

  EventEmitter.on("orderPlaced", (deviceData) => {
    // console.log("===============xxxxxxxx", deviceData.email);
    socket.emit("Orderd", deviceData);
  });
});

const authRoutes = require("./src/routes/auth.route");
const userRouter = require("./src/routes/user.route");
app.use("/api", authRoutes);
app.use("/api", userRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.listen(port, () => {
  console.log(`listenig the port at ${port}`);
});
// https://www.bootdey.com/react-native-snippets
