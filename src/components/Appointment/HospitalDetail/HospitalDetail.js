import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Shered/Header/Header";
import AppoinHeader from "../AppoinHeader";
import Appoinment from "../Appoinment";

const HospitalDetail = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Header></Header>
      <AppoinHeader date={date} setDate={setDate}></AppoinHeader>
      <Appoinment date={date}></Appoinment>
    </div>
  );
};

export default HospitalDetail;
