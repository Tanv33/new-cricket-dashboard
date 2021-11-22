const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 4000;
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://tanveer:tanveer@cluster0.ld4t4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

app.use("/", express.static(path.join(__dirname, "/web/build")));

const cricketInfo = mongoose.model("Cricket Information Posts", {
  team1: String,
  batsman1: String,
  batsman1Runs: { type: Number, default: 0 },
  batsman1Balls: { type: Number, default: 0 },
  batsman2: String,
  batsman2Runs: { type: Number, default: 0 },
  batsman2Balls: { type: Number, default: 0 },
  totalRuns: { type: Number, default: 0 },
  totalOuts: { type: Number, default: 0 },
  totalOvers: { type: Number, default: 0 },
  team2: String,
  bowler1: String,
  bowler1balls: { type: Number, default: 0 },
  bowler1Runs: { type: Number, default: 0 },
  bowler1Wickets: { type: Number, default: 0 },
  bowler2: String,
  bowler2Balls: { type: Number, default: 0 },
  bowler2Runs: { type: Number, default: 0 },
  bowler2Wickets: { type: Number, default: 0 },
  target: { type: Number, default: 0 },
  created: { type: Date, default: Date.now },
});

app.post("/api/v1/scorepost", async (req, res) => {
  const newInfo = await new cricketInfo({
    team1: req.body.team1,
    batsman1: req.body.batsman1,
    batsman1Runs: req.body.batsman1Runs,
    batsman1Balls: req.body.batsman1Balls,
    batsman2: req.body.batsman2,
    batsman2Runs: req.body.batsman2Runs,
    batsman2Balls: req.body.batsman2Balls,
    totalRuns: req.body.totalRuns,
    totalOuts: req.body.totalOuts,
    totalOvers: req.body.totalOvers,
    team2: req.body.team2,
    bowler1: req.body.bowler1,
    bowler1balls: req.body.bowler1balls,
    bowler1Runs: req.body.bowler1Runs,
    bowler1Wickets: req.body.bowler1Wickets,
    bowler2: req.body.bowler2,
    bowler2Balls: req.body.bowler2Balls,
    bowler2Runs: req.body.bowler2Runs,
    bowler2Wickets: req.body.bowler2Wickets,
    target: req.body.target,
  });
  newInfo
    .save()
    .then((data) => {
      //   console.log("Post created");
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });

  io.emit("SCORE", {
    team1: req.body.team1,
    batsman1: req.body.batsman1,
    batsman1Runs: req.body.batsman1Runs,
    batsman1Balls: req.body.batsman1Balls,
    batsman2: req.body.batsman2,
    batsman2Runs: req.body.batsman2Runs,
    batsman2Balls: req.body.batsman2Balls,
    totalRuns: req.body.totalRuns,
    totalOuts: req.body.totalOuts,
    totalOvers: req.body.totalOvers,
    team2: req.body.team2,
    bowler1: req.body.bowler1,
    bowler1balls: req.body.bowler1balls,
    bowler1Runs: req.body.bowler1Runs,
    bowler1Wickets: req.body.bowler1Wickets,
    bowler2: req.body.bowler2,
    bowler2Balls: req.body.bowler2Balls,
    bowler2Runs: req.body.bowler2Runs,
    bowler2Wickets: req.body.bowler2Wickets,
    target: req.body.target,
  });
});

app.get("/api/v1/getscore", (req, res) => {
  cricketInfo
    .findOne({})
    .sort({ _id: "desc" })
    .exec((err, data) => {
      res.send(data);
      // console.log(data);
    });
});

app.post("/api/v1/deleteRecord", async (req, res) => {
  cricketInfo.deleteMany({}, (err, data) => {
    res.send(data);
  });
});

app.use("/**", (req, res) => {
  // res.redirect("/")
  res.sendFile(path.join(__dirname, "/web/build/index.html"));
});

// app.listen(PORT, () =>
//   console.log(`Example app listening on port http://localhost:${PORT}`)
// );

const server = createServer(app);

const io = new Server(server, { cors: { origin: "*", methods: "*" } });

io.on("connection", (socket) => {
  console.log("New client connected with id: ", socket.id);

  // to emit data to a certain client
  socket.emit("topic 1", "some data");

  // collecting connected users in a array
  // connectedUsers.push(socket)

  socket.on("disconnect", (message) => {
    console.log("Client disconnected with id: ", message);
  });
});

// setInterval(() => {

//   // to emit data to all connected client
//   // first param is topic name and second is json data
//   io.emit("Test topic", { event: "ADDED_ITEM", data: "some data" });
//   console.log("emiting data to all client");

// }, 2000)

server.listen(PORT, function () {
  console.log("server is running on", PORT);
});
