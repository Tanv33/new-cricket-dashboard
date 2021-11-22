import "./Admin.css"
import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, InputLabel, MenuItem, Select } from "@mui/material";
import { tournamentTeam, arrayOfTeam } from "../../core";

function Admin() {
  const dev = "http://localhost:4000";
  const baseURL =
    window.location.hostname.split(":")[0] === "localhost" ? dev : "";
  const [scoreObject, setScoreObject] = useState({
    team1: "",
    batsman1: "",
    batsman1Runs: 0,
    batsman1Balls: 0,
    batsman2: "",
    batsman2Runs: 0,
    batsman2Balls: 0,
    totalRuns: 0,
    totalOuts: 0,
    totalOvers: 0,
    team2: "",
    bowler1: "",
    bowler1balls: 0,
    bowler1Runs: 0,
    bowler1Wickets: 0,
    bowler2: "",
    bowler2Balls: 0,
    bowler2Runs: 0,
    bowler2Wickets: 0,
    target: 0,
  });

  useEffect(() => {
    axios.get(`${baseURL}/api/v1/getscore`).then((res) => {
      setScoreObject(res.data);
    });
    // eslint-disable-next-line
  }, []);

  const submit = (w) => {
    w.preventDefault();
    axios
      .post(`${baseURL}/api/v1/scorepost`, {
        team1: scoreObject.team1,
        batsman1: scoreObject.batsman1,
        batsman1Runs: scoreObject.batsman1Runs,
        batsman1Balls: scoreObject.batsman1Balls,
        batsman2: scoreObject.batsman2,
        batsman2Runs: scoreObject.batsman2Runs,
        batsman2Balls: scoreObject.batsman2Balls,
        totalRuns: scoreObject.totalRuns,
        totalOuts: scoreObject.totalOuts,
        totalOvers: scoreObject.totalOvers,
        team2: scoreObject.team2,
        bowler1: scoreObject.bowler1,
        bowler1balls: scoreObject.bowler1balls,
        bowler1Runs: scoreObject.bowler1Runs,
        bowler1Wickets: scoreObject.bowler1Wickets,
        bowler2: scoreObject.bowler2,
        bowler2Balls: scoreObject.bowler2Balls,
        bowler2Runs: scoreObject.bowler2Runs,
        bowler2Wickets: scoreObject.bowler2Wickets,
        target: scoreObject.target,
      })
      .then((result) => {
        // console.log(result.data);
      });
  };

  // delete record
  const deleteAllRecord = () => {
    axios
      .post(`${baseURL}/api/v1/deleteRecord`, {})
      .then((result) => {
        if (result) {
          window.location.reload();
        }
      })
      .catch((err) => {});
  };
  return (
    <div className="adminMainDiv">
      <br />
      <Container>
        <h1 style={{textAlign:"center",fontWeight:"bold",color:"darkred"}}>Admin Panel</h1>
        <br />
        <form  onSubmit={submit}>
          <br />
          <InputLabel>Team 1</InputLabel>
          <Select
            required
            style={{
              width: "20vw",
              height: "7vh",
              marginBottom: "15px",
              fontSize: "22px",
            }}
            sx={{ minWidth: 210 }}
            variant="filled"
            name="team1"
            value={scoreObject.team1}
            onChange={(e) => {
              setScoreObject((pre) => ({ ...pre, team1: e.target.value }));
            }}
          >
            {tournamentTeam.map((team, i) => (
              <MenuItem key={i} value={team}>
                {team}
              </MenuItem>
            ))}
          </Select>
          <br /> <br />
          <InputLabel>Batsman 1</InputLabel>
          <Select
            required
            style={{
              width: "20vw",
              height: "7vh",
              marginBottom: "15px",
              fontSize: "22px",
            }}
            sx={{ minWidth: 210 }}
            variant="filled"
            name="batsman1"
            value={scoreObject.batsman1}
            onChange={(e) => {
              setScoreObject((pre) => ({ ...pre, batsman1: e.target.value }));
            }}
          >
            {arrayOfTeam[scoreObject.team1]?.map((team, i) => (
              <MenuItem key={i} value={team}>
                {team}
              </MenuItem>
            ))}
          </Select>
          <TextField
            type="number"
            name="batsman1Runs"
            label="Batsman 1  Runs"
            variant="outlined"
            value={scoreObject.batsman1Runs}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                batsman1Runs: e.target.value,
              }));
            }}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="batsman1Balls"
            label="Batsman 1  Balls"
            variant="outlined"
            value={scoreObject.batsman1Balls}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                batsman1Balls: e.target.value,
              }));
            }}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <br />
          <InputLabel>Batsman 2</InputLabel>
          <Select
            required
            style={{
              width: "20vw",
              height: "7vh",
              marginBottom: "15px",
              fontSize: "22px",
            }}
            sx={{ minWidth: 210 }}
            variant="filled"
            name="batsman2"
            value={scoreObject.batsman2}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                batsman2: e.target.value,
              }));
            }}
          >
            {arrayOfTeam[scoreObject.team1]?.map((team, i) => (
              <MenuItem key={i} value={team}>
                {team}
              </MenuItem>
            ))}
          </Select>
          <TextField
            type="number"
            name="batsman2Runs"
            label="Batsman 2  Runs"
            variant="outlined"
            value={scoreObject.batsman2Runs}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                batsman2Runs: e.target.value,
              }));
            }}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="batsman2Balls"
            label="Batsman 2  Balls"
            variant="outlined"
            value={scoreObject.batsman2Balls}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                batsman2Balls: e.target.value,
              }));
            }}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <br />
          <InputLabel>Total</InputLabel>
          <br />
          <TextField
            type="number"
            name="totalRuns"
            label="Total Runs"
            variant="outlined"
            value={scoreObject.totalRuns}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                totalRuns: e.target.value,
              }));
            }}
            style={{ marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="totalOuts"
            label="Total Outs"
            variant="outlined"
            value={scoreObject.totalOuts}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                totalOuts: e.target.value,
              }));
            }}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="totalOvers"
            label="Total Overs"
            variant="outlined"
            value={scoreObject.totalOvers}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                totalOvers: e.target.value,
              }));
            }}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <br />
          <hr />
          <br />
          <InputLabel>Team 2</InputLabel>
          <Select
            required
            style={{
              width: "20vw",
              height: "7vh",
              marginBottom: "15px",
              fontSize: "22px",
            }}
            sx={{ minWidth: 210 }}
            variant="filled"
            name="team2"
            value={scoreObject.team2}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                team2: e.target.value,
              }));
            }}
          >
            {tournamentTeam.map((team, i) => (
              <MenuItem key={i} value={team}>
                {team}
              </MenuItem>
            ))}
          </Select>
          <br />
          <InputLabel>Bowler 1</InputLabel>
          <Select
            required
            style={{
              width: "20vw",
              height: "7vh",
              marginBottom: "15px",
              fontSize: "22px",
            }}
            sx={{ minWidth: 210 }}
            variant="filled"
            name="bowler1"
            value={scoreObject.bowler1}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                bowler1: e.target.value,
              }));
            }}
          >
            {arrayOfTeam[scoreObject.team2]?.map((team, i) => (
              <MenuItem key={i} value={team}>
                {team}
              </MenuItem>
            ))}
          </Select>
          <TextField
            type="number"
            name="bowler1balls"
            label="Bowler 1  Balls"
            variant="outlined"
            value={scoreObject.bowler1balls}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                bowler1balls: e.target.value,
              }));
            }}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="bowler1Runs"
            label="Bowler 1  Runs"
            variant="outlined"
            value={scoreObject.bowler1Runs}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                bowler1Runs: e.target.value,
              }));
            }}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="bowler1Wickets"
            label="Bowler 1  Wickets"
            variant="outlined"
            value={scoreObject.bowler1Wickets}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                bowler1Wickets: e.target.value,
              }));
            }}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <br />
          <InputLabel>Bowler 2</InputLabel>
          <Select
            required
            style={{
              width: "20vw",
              height: "7vh",
              marginBottom: "15px",
              fontSize: "22px",
            }}
            sx={{ minWidth: 210 }}
            variant="filled"
            name="bowler2"
            value={scoreObject.bowler2}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                bowler2: e.target.value,
              }));
            }}
          >
            {arrayOfTeam[scoreObject.team2]?.map((team, i) => (
              <MenuItem key={i} value={team}>
                {team}
              </MenuItem>
            ))}
          </Select>
          <TextField
            type="number"
            name="bowler2Balls"
            label="Bowler 2  Balls"
            variant="outlined"
            value={scoreObject.bowler2Balls}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                bowler2Balls: e.target.value,
              }));
            }}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="bowler2Runs"
            label="Bowler 2  Runs"
            variant="outlined"
            value={scoreObject.bowler2Runs}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                bowler2Runs: e.target.value,
              }));
            }}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="bowler2Wickets"
            label="Bowler 2  Wickets"
            variant="outlined"
            value={scoreObject.bowler2Wickets}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                bowler2Wickets: e.target.value,
              }));
            }}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <br />
          <InputLabel>Target</InputLabel>
          <TextField
            type="number"
            name="target"
            variant="filled"
            value={scoreObject.target}
            onChange={(e) => {
              setScoreObject((pre) => ({
                ...pre,
                target: e.target.value,
              }));
            }}
            style={{ marginBottom: "15px" }}
          />
          <br />
          <Button
          style={{ marginTop: "5px", marginBottom: "15px" ,marginRight: "8px"}}
            type="submit"
            size="medium"
            variant="contained"
            color="success"
          >
            Add
          </Button>
        <Button
          style={{ marginTop: "5px", marginBottom: "15px" }}
          variant="contained"
          color="error"
          onClick={deleteAllRecord}
        >
          Delete All Record
        </Button>
        </form>
      </Container>
    </div>
  );
}

export default Admin;
