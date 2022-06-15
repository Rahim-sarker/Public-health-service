import { Grid, Typography } from "@mui/material";
import React from "react";
import Booking from "./Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    space: 8,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "07.00 AM - 08.30 AM",
    space: 10,
  },
  {
    id: 5,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 6,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    space: 8,
  },
];

const Appoinment = ({ date }) => {
  return (
    <div>
      <Typography variant="h4" sx={{ color: "info.main", mb: 3 }}>
        Available Appoinment on {date.toDateString()}
      </Typography>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking} date={date}></Booking>
        ))}
      </Grid>
    </div>
  );
};

export default Appoinment;
