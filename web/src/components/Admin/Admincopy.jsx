import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { Container, InputLabel, MenuItem, Select } from "@mui/material";
import { tournamentTeam, arrayOfTeam } from "../../core";

function Admin() {
  const [onLoadFieldsValue, setOnLoadFieldsValue] = useState({
    team1: "",
    batsman1: "",
    batsman1Runs: "",
    batsman1Balls: "",
    batsman2: "",
    batsman2Runs: "",
    batsman2Balls: "",
    totalRuns: "",
    totalOuts: "",
    totalOvers: "",
    team2: "",
    bowler1: "",
    bowler1balls: "",
    bowler1Runs: "",
    bowler1Wickets: "",
    bowler2: "",
    bowler2Balls: "",
    bowler2Runs: "",
    bowler2Wickets: "",
    target: "",
  });

  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/getscore").then((res) => {
      setOnLoadFieldsValue(res.data);
    });
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    initialValues: {
      team1: onLoadFieldsValue.team1,
      batsman1: onLoadFieldsValue.batsman1,
      batsman1Runs: onLoadFieldsValue.batsman1Runs,
      batsman1Balls: onLoadFieldsValue.batsman1Balls,
      batsman2: onLoadFieldsValue.batsman2,
      batsman2Runs: onLoadFieldsValue.batsman2Runs,
      batsman2Balls: onLoadFieldsValue.batsman2Balls,
      totalRuns: onLoadFieldsValue.totalRuns,
      totalOuts: onLoadFieldsValue.totalOuts,
      totalOvers: onLoadFieldsValue.totalOvers,
      team2: onLoadFieldsValue.team2,
      bowler1: onLoadFieldsValue.bowler1,
      bowler1balls: onLoadFieldsValue.bowler1balls,
      bowler1Runs: onLoadFieldsValue.bowler1Runs,
      bowler1Wickets: onLoadFieldsValue.bowler1Wickets,
      bowler2: onLoadFieldsValue.bowler2,
      bowler2Balls: onLoadFieldsValue.bowler2Balls,
      bowler2Runs: onLoadFieldsValue.bowler2Runs,
      bowler2Wickets: onLoadFieldsValue.bowler2Wickets,
      target: onLoadFieldsValue.target,
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:4000/api/v1/scorepost", {
          team1: values.team1,
          batsman1: values.batsman1,
          batsman1Runs: values.batsman1Runs,
          batsman1Balls: values.batsman1Balls,
          batsman2: values.batsman2,
          batsman2Runs: values.batsman2Runs,
          batsman2Balls: values.batsman2Balls,
          totalRuns: values.totalRuns,
          totalOuts: values.totalOuts,
          totalOvers: values.totalOvers,
          team2: values.team2,
          bowler1: values.bowler1,
          bowler1balls: values.bowler1balls,
          bowler1Runs: values.bowler1Runs,
          bowler1Wickets: values.bowler1Wickets,
          bowler2: values.bowler2,
          bowler2Balls: values.bowler2Balls,
          bowler2Runs: values.bowler2Runs,
          bowler2Wickets: values.bowler2Wickets,
          target: values.target,
        })
        .then((result) => {
          // console.log(result.data);
        });
    },
  });

  // delete record
  const deleteAllRecord = () => {
    axios
      .post("http://localhost:4000/api/v1/deleteRecord", {})
      .then((result) => {
        if (result) {
          window.location.reload();
        }
      })
      .catch((err) => {});
  };
  return (
    <div>
      <br />
      <Container>
        <h1>Admin Panel</h1>
        <br />
        <form onSubmit={formik.handleSubmit}>
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
            variant="filled"
            name="team1"
            value={formik.values.team1 || onLoadFieldsValue.team1}
            onChange={formik.handleChange}
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
            variant="filled"
            name="batsman1"
            value={formik.values.batsman1 || onLoadFieldsValue.batsman1}
            onChange={formik.handleChange}
          >
            {arrayOfTeam[formik.values.team1 || onLoadFieldsValue.team1]?.map(
              (team, i) => (
                <MenuItem key={i} value={team}>
                  {team}
                </MenuItem>
              )
            )}
          </Select>
          <TextField
            type="number"
            name="batsman1Runs"
            label="Batsman 1  Runs"
            variant="outlined"
            value={formik.values.batsman1Runs || onLoadFieldsValue.batsman1Runs}
            onChange={formik.handleChange}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="batsman1Balls"
            label="Batsman 1  Balls"
            variant="outlined"
            value={
              formik.values.batsman1Balls || onLoadFieldsValue.batsman1Balls
            }
            onChange={formik.handleChange}
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
            variant="filled"
            name="batsman2"
            value={formik.values.batsman2 || onLoadFieldsValue.batsman2}
            onChange={formik.handleChange}
          >
            {arrayOfTeam[formik.values.team1 || onLoadFieldsValue.team1]?.map(
              (team, i) => (
                <MenuItem key={i} value={team}>
                  {team}
                </MenuItem>
              )
            )}
          </Select>
          <TextField
            type="number"
            name="batsman2Runs"
            label="Batsman 2  Runs"
            variant="outlined"
            value={formik.values.batsman2Runs || onLoadFieldsValue.batsman2Runs}
            onChange={formik.handleChange}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="batsman2Balls"
            label="Batsman 2  Balls"
            variant="outlined"
            value={
              formik.values.batsman2Balls || onLoadFieldsValue.batsman2Balls
            }
            onChange={formik.handleChange}
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
            value={formik.values.totalRuns || onLoadFieldsValue.totalRuns}
            onChange={formik.handleChange}
            style={{ marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="totalOuts"
            label="Total Outs"
            variant="outlined"
            value={formik.values.totalOuts || onLoadFieldsValue.totalOuts}
            onChange={formik.handleChange}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="totalOvers"
            label="Total Overs"
            variant="outlined"
            value={formik.values.totalOvers || onLoadFieldsValue.totalOvers}
            onChange={formik.handleChange}
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
            variant="filled"
            name="team2"
            value={formik.values.team2 || onLoadFieldsValue.team2}
            onChange={formik.handleChange}
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
            variant="filled"
            name="bowler1"
            value={formik.values.bowler1 || onLoadFieldsValue.bowler1}
            onChange={formik.handleChange}
          >
            {arrayOfTeam[formik.values.team2 || onLoadFieldsValue.team2]?.map(
              (team, i) => (
                <MenuItem key={i} value={team}>
                  {team}
                </MenuItem>
              )
            )}
          </Select>
          <TextField
            type="number"
            name="bowler1balls"
            label="Bowler 1  Balls"
            variant="outlined"
            value={formik.values.bowler1balls || onLoadFieldsValue.bowler1balls}
            onChange={formik.handleChange}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="bowler1Runs"
            label="Bowler 1  Runs"
            variant="outlined"
            value={formik.values.bowler1Runs || onLoadFieldsValue.bowler1Runs}
            onChange={formik.handleChange}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="bowler1Wickets"
            label="Bowler 1  Wickets"
            variant="outlined"
            value={
              formik.values.bowler1Wickets || onLoadFieldsValue.bowler1Wickets
            }
            onChange={formik.handleChange}
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
            variant="filled"
            name="bowler2"
            value={formik.values.bowler2 || onLoadFieldsValue.bowler2}
            onChange={formik.handleChange}
          >
            {arrayOfTeam[formik.values.team2 || onLoadFieldsValue.team2]?.map(
              (team, i) => (
                <MenuItem key={i} value={team}>
                  {team}
                </MenuItem>
              )
            )}
          </Select>
          <TextField
            type="number"
            name="bowler2Balls"
            label="Bowler 2  Balls"
            variant="outlined"
            value={formik.values.bowler2Balls || onLoadFieldsValue.bowler2Balls}
            onChange={formik.handleChange}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="bowler2Runs"
            label="Bowler 2  Runs"
            variant="outlined"
            value={formik.values.bowler2Runs || onLoadFieldsValue.bowler2Runs}
            onChange={formik.handleChange}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <TextField
            type="number"
            name="bowler2Wickets"
            label="Bowler 2  Wickets"
            variant="outlined"
            value={
              formik.values.bowler2Wickets || onLoadFieldsValue.bowler2Wickets
            }
            onChange={formik.handleChange}
            style={{ marginLeft: "15px", marginBottom: "15px" }}
          />
          <br />
          <InputLabel>Target</InputLabel>
          <TextField
            type="number"
            name="target"
            label="Target"
            variant="outlined"
            value={formik.values.target || onLoadFieldsValue.target}
            onChange={formik.handleChange}
            style={{ marginBottom: "15px" }}
          />
          <br />
          <Button
            type="submit"
            size="medium"
            variant="contained"
            color="success"
          >
            Add
          </Button>
        </form>
        <Button
          style={{ marginTop: "5px" }}
          variant="contained"
          color="error"
          onClick={deleteAllRecord}
        >
          Delete All Record
        </Button>
      </Container>
    </div>
  );
}

export default Admin;
