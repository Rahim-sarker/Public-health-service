import { Container, Grid } from "@mui/material";
import chair from "../../images/chair.png";
import React from "react";
import Clender from "../Shered/Calender/Clender";
const AppoinHeader = ({ date, setDate }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Clender date={date} setDate={setDate}></Clender>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppoinHeader;
