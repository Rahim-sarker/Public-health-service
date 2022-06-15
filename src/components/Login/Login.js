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
import login from "../../images/login.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
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
            Login
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
            <Button
              sx={{ width: "75%", m: 1 }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>

            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User ? Please Register</Button>
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

export default Login;
