import { Button } from "@mui/material";
import React from "react";
import Footer from "../../Shered/Footer/Footer";
import Header from "../../Shered/Header/Header";
import Banner from "../Banner/Banner";

import Hospitals from "../Hospitals/Hospitals";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Hospitals></Hospitals>
      <Footer></Footer>
    </div>
  );
};

export default Home;
