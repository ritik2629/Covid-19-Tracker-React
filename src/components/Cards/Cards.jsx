import React from "react";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import styles from "./Cards.module.css";
import cx from "classnames";
const Cards = ({ data: { confirmed, deaths, lastUpdate } }) => {
  //   console.log(data);
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={2} columns={16} justify="center">
        <Grid
          item
          component={Card}
          xs={8}
          md={6}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography style={{color:"blue"}} color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={8}
          md={6}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography style={{color:"red"}} color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths from covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
