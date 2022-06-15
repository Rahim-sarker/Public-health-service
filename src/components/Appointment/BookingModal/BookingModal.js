import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const handleOnblur = (e) => {};

const handleBookingSubmit = (e) => {
  e.preventDefault();
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
  return (
    <Modal
      open={openBooking}
      onClose={handleBookingClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
        ></Typography>
        <form>
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            placeholder="Patient Name"
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            name="patientName"
            placeholder=" Age"
            onBlur={handleOnblur}
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            name="email"
            placeholder="Email"
            onBlur={handleOnblur}
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            placeholder="Phone number"
            onBlur={handleOnblur}
            name="phone"
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            disabled
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            size="small"
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
