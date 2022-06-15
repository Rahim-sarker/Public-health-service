import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import login from "../../../images/login.png";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState();
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 20 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          <form>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              type="email"
              onBlur={handleOnchange}
              name="email"
              variant="standard"
            />

            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Password"
              type="password"
              onBlur={handleOnchange}
              name="password"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Re-Enter password"
              type="password"
              name="password2"
              variant="standard"
            />
            <Button
              sx={{ width: "75%", m: 1 }}
              variant="contained"
              type="submit"
            >
              Register
            </Button>

            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button variant="text">Already Registerd ? Please login</Button>
            </NavLink>
          </form>
        </Grid>

        <Grid item sx={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt=""></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
