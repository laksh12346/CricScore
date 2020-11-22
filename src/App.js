import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MyCard from "./components/Card";
import Navbar from "./components/Navbar";
import { getMatches } from "./components/api/Api";
import { Container, Grid, Typography } from "@material-ui/core";
import "./styles.css";

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>

      <Grid container>
        <Grid item xs={12}>
          {matches.map((match) => (
            <MyCard match={match}></MyCard>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
