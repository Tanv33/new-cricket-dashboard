import "./Rough.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { Container } from "@mui/material";

import io from 'socket.io-client';

function Rough() {
  const [scoreBoard, setScoreBoard] = useState([]);
  // const [obj, setObj] = useState({});
  const [batsmanName, setBatsmanName] = useState("Babar Azam");
  const [bowlerName, setBowlerName] = useState("Pat Cummins");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/getscore")
      .then((result) => {
        // console.log(result.data);
        let obj = {};
        // Batting Player
        let batRunsSum = 0;
        let batBallsSum = 0;
        // Bowling Player
        let bowlBallSum = 0;
        let bowlRunSum = 0;
        let bowlOutSum = 0;
        // Normal Score
        let totalRunSum = 0;
        let totalBallsSum = 0;
        let outsSum = 0;
        // setScoreBoard(result.data);
        result.data.forEach((element) => {
          // console.log(element.batsmanName, element.batPlayerRuns);
          if (element.batsmanName === batsmanName) {
            obj.batsmanName = element.batsmanName;
            batRunsSum += parseInt(element.batPlayerRuns);
            batBallsSum += parseInt(element.bowlPlayerBalls);
          }
          if (element.bowlerName === bowlerName) {
            obj.bowlerName = element.bowlerName;
            bowlBallSum += parseInt(element.bowlPlayerBalls);
            bowlRunSum += parseInt(element.batPlayerRuns);
            bowlOutSum += parseInt(element.out);
          }
          totalRunSum += parseInt(element.batPlayerRuns);
          totalBallsSum += parseInt(element.bowlPlayerBalls);
          outsSum += parseInt(element.out);
        });

        obj.batPlayerRuns = batRunsSum;
        obj.batPlayerBalls = batBallsSum;

        obj.bowlPlayerBalls = bowlBallSum;
        obj.bowlPlayerRuns = bowlRunSum;
        obj.bowlOuts = bowlOutSum;

        obj.totalRuns = totalRunSum;
        obj.totalBalls = totalBallsSum;
        obj.outs = outsSum;
        // console.log(obj);
        setScoreBoard(obj);
      })
      .catch((err) => {
        // console.log(err);
      });
    // eslint-disable-next-line
    return () => {};
    // eslint-disable-next-line
  }, []);
  // refresh

  
  useEffect(() => {
    const socket = io("http://localhost:4000"); // to connect with locally running Socker.io server

    socket.on('connect', function () {
        console.log("connected to server")
    });
    socket.on('disconnect', function (message) {
        console.log("disconnected from server: ", message);
    });
    socket.on('POSTS', function (data) {
        // console.log(data);
        // setRefresh(!refresh)
        // setPosts((prev) => [data, ...prev])
    // eslint-disable-next-line

    });

    return () => {
        socket.close();
    };
}, []);

  const formik = useFormik({
    initialValues: {
      batPlayerRuns: 0,
      bowlPlayerBalls: 0,
      out: 0,
    },
    onSubmit: (values) => {
      values.batsmanName = batsmanName;
      values.bowlerName = bowlerName;

      axios
        .post("http://localhost:4000/api/v1/scorepost", {
          batsmanName: values.batsmanName,
          batPlayerRuns: values.batPlayerRuns,
          bowlerName: values.bowlerName,
          bowlPlayerBalls: values.bowlPlayerBalls,
          out: values.out,
        })
        .then((result) => {
          // console.log(result.data);
          setRefresh(!refresh);
        })
        .catch((err) => {
          // console.log(err);
        });
      // setScoreBoard(values);
      // console.log(scoreBoard);
    },
  });

  // selecting Batsman
  const selectBatsman = (e) => {
    setBatsmanName(e.target.value);
  };

  // selecting Bowler
  const selectBowler = (e) => {
    setBowlerName(e.target.value);
  };
  const deleteAllRecord = () => {
    axios
      .post("http://localhost:4000/api/v1/deleteRecord", {})
      .then((result) => {
        setRefresh(!refresh);
      })
      .catch((err) => {});
  };
  return (
    <div>
      <Container>
        <div
          style={{
            // flexGrow: 1,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              float: "left",
            }}
          >
            <h1>PAK</h1>
            <h2>Batting</h2>
            <br />
            <h2>
              <span style={{ color: "green" }}> Total Runs:</span>{" "}
              {scoreBoard.totalRuns}&nbsp;/&nbsp;{scoreBoard.outs} &nbsp;{" "}
              <span style={{ color: "green" }}>Total Balls:</span>{" "}
              {scoreBoard.totalBalls}
              {/* Overs:{((scoreBoard.totalBalls)/6).toFixed(2)} */}
            </h2>
            <br />
            <h2>
              <span style={{ color: "green" }}> Batsman:</span>{" "}
              {scoreBoard.batsmanName}:&nbsp;&nbsp;
              <span style={{ color: "green" }}>Runs:</span>
              {scoreBoard.batPlayerRuns} &nbsp;&nbsp;
              <span style={{ color: "green" }}>Balls:</span>{" "}
              {scoreBoard.batPlayerBalls}
            </h2>
            <br />
            <br />
            {/* <h2>/:</h2> */}
            <br />
            {/* <h2>Target: ...</h2> */}
          </div>
          <div
            style={{
              borderLeft: "6px solid green",
              height: "300px",
              float: "left",
              marginLeft: "17px",
              marginRight: "17px",
            }}
          ></div>
          <div
            style={
              {
                //   float: "right",
              }
            }
          >
            <h1>AUS</h1>
            <h2>Bowling</h2>
            <br />
            <h2>
              <span style={{ color: "#FEDE00" }}>Bowler:</span>{" "}
              {scoreBoard.bowlerName}:&nbsp;&nbsp;
              <span style={{ color: "#FEDE00" }}>Balls:</span>
              {scoreBoard.bowlPlayerBalls} &nbsp;&nbsp;
              <span style={{ color: "#FEDE00" }}>Runs:</span>
              {scoreBoard.bowlPlayerRuns}&nbsp;
              <span style={{ color: "#FEDE00" }}>wickets:</span>{" "}
              {scoreBoard.bowlOuts}
            </h2>
            <br />
            {/* <h2>:/</h2> */}
          </div>
        </div>
      </Container>
      {/* {scoreBoard.map((element) => (
            <div>
              <h2>{element.batsmanName}</h2>
              <h2>{element.batPlayerRuns}</h2>
              <hr />
              <hr />
              <h2>{element.bowlerName}</h2>
              <h2>{element.bowlPlayerBalls}</h2>
            </div>
          ))} */}

      <Container
        style={{ position: "absolute", bottom: "110px", textAlign: "center" }}
      >
        <form onSubmit={formik.handleSubmit}>
          <select
            style={{ width: "20vw", height: "7vh", fontSize: "22px" }}
            onChange={selectBatsman}
          >
            <option value="Babar Azam">Babar Azam</option>
            <option value="Mohammad Rizwan">Mohammad Rizwan</option>
            <option value="Fakhar Zaman">Fakhar Zaman</option>
            <option value="Haider Ali">Haider Ali</option>
            <option value="Mohammad Hafeez">Mohammad Hafeez</option>
            <option value="Shoaib Malik">Shoaib Malik</option>
            <option value="Asif Ali">Asif Ali</option>
            <option value="Shadab Khan">Shadab Khan</option>
            <option value="Imad Wasim">Imad Wasim</option>
            <option value="Hasan Ali">Hasan Ali</option>
            <option value="Shaheen Afridi">Shaheen Afridi</option>
            <option value="Haris Rauf">Haris Rauf</option>
          </select>
          <TextField
            type="number"
            name="batPlayerRuns"
            label="Batting Player Runs"
            variant="outlined"
            placeholder="Enter Batting Player runs"
            value={formik.values.batPlayerRuns}
            onChange={formik.handleChange}
            style={{ margin: "15px" }}
          />
          <br />
          <select
            style={{ width: "20vw", height: "7vh", fontSize: "22px" }}
            onChange={selectBowler}
          >
            <option value="Pat Cummins">Pat Cummins</option>
            <option value="Mitchell Starc">Mitchell Starc</option>
            <option value="Adam Zampa">Adam Zampa</option>
            <option value="Aaron Finch">Aaron Finch</option>
            <option value="Ashton Agar">Ashton Agar</option>
            <option value="Josh Hazlewood">Josh Hazlewood</option>
            <option value="Josh Inglis">Josh Inglis</option>
            <option value="Mitchell Marsh">Mitchell Marsh</option>
            <option value="Glenn Maxwell">Glenn Maxwell</option>
            <option value="Kane Richardson">Kane Richardson</option>
            <option value="Steve Smith">Steve Smith</option>
            <option value="Marcus Stoinis">Marcus Stoinis</option>
          </select>
          <TextField
            type="number"
            name="bowlPlayerBalls"
            label="Bowling Player Balls"
            variant="outlined"
            placeholder="Enter Bowling Player Balls"
            value={formik.values.bowlPlayerBalls}
            onChange={formik.handleChange}
            style={{ margin: "15px" }}
          />
          <br />
          <TextField
            type="number"
            name="out"
            label="Out"
            variant="outlined"
            placeholder="Enter Out"
            value={formik.values.out}
            onChange={formik.handleChange}
            style={{ margin: "15px" }}
          />

          <br />
          <Button
            type="submit"
            size="medium"
            variant="contained"
            color="success"
            style={{ margin: "5px" }}
          >
            Add
          </Button>
        </form>
        <Button variant="contained" color="error" onClick={deleteAllRecord}>
          Delete All Record
        </Button>
      </Container>
    </div>
  );
}

export default Rough;
