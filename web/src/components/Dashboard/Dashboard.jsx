import React from "react";
import "./Dashboard.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Navbar, Button } from "react-bootstrap";

import io from "socket.io-client";
function Dashboard() {
  const [showCase, setShowCase] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/getscore")
      .then((result) => {
        // console.log(result.data);
        setShowCase(result.data);
      })
      .catch((err) => {
        // console.log(err);
      });

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("connect", function () {
      console.log("connected to server");
    });
    socket.on("disconnect", function (message) {
      console.log("disconnected from server: ", message);
    });
    socket.on("SCORE", function (data) {
      // console.log(data);
      setShowCase(data);
      // setPosts((prev) => [data, ...prev])
    });

    return () => {
      socket.close();
    };
    // eslint-disable-next-line
  }, []);
  const changeBg = (e) => {
    const addClass = document.getElementById("dashboard");
    if (addClass.className === "dashboard") {
      addClass.classList.add("dashboard1");
      addClass.classList.remove("dashboard");
    } else {
      addClass.classList.add("dashboard");
      addClass.classList.remove("dashboard1");
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Live Cricket Score</Navbar.Brand>
          <Button size="sm" variant="light" onClick={changeBg}>
            change Background
          </Button>
        </Container>
      </Navbar>

      <div id="dashboard" className="dashboard">
        <br />
        <Container>
          <div key={showCase?._id}>
            <div className="content">
              <h2 className="center" style={{ backgroundColor: "#033A5C" }}>
                {showCase?.team1}
              </h2>
              <br />
              <h3 className="center">Batting</h3>

              <div>
                <h4>
                  Total Runs: {showCase?.totalRuns} / {showCase?.totalOuts}{" "}
                  &nbsp; Overs: {showCase?.totalOvers}
                  <br />
                  <br />
                  Batsman 1: {showCase?.batsman1} {showCase?.batsman1Runs} /{" "}
                  {showCase?.batsman1Balls}
                  <br />
                  <br />
                  Batsman 2: {showCase?.batsman2} {showCase?.batsman2Runs} /{" "}
                  {showCase?.batsman2Balls}
                  <br />
                  <br />
                  Run Rate:{" "}
                  {(showCase.totalRuns / showCase.totalOvers).toFixed(3)}
                </h4>
              </div>
            </div>
            <div className="content">
              <h2 className="center" style={{ backgroundColor: "#033A5C" }}>
                {showCase.team2}
              </h2>
              <br />
              <h3 className="center">Bowling</h3>
              <br />

              <div>
                <h4>
                  Bowler 1: {showCase?.bowler1} {showCase?.bowler1balls} /{" "}
                  {showCase?.bowler1Runs} &nbsp;Wickets:{" "}
                  {showCase.bowler1Wickets}
                  <br />
                  <br />
                  Bowler 2: {showCase?.bowler2} {showCase?.bowler2Balls} /{" "}
                  {showCase?.bowler2Runs} &nbsp;Wickets:{" "}
                  {showCase.bowler2Wickets}
                  <br />
                  <br />
                  Target: <strong>{showCase.target}</strong>
                </h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
