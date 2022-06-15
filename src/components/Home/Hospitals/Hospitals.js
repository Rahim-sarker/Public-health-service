import React, { useEffect, useState } from "react";
import Hospital from "./Hospital/Hospital";
import { Row } from "react-bootstrap";

const Hospitals = () => {
  const [allHospital, setHospital] = useState([]);
  useEffect(() => {
    fetch("hospital.json")
      .then((res) => res.json())
      .then((data) => setHospital(data));
  }, []);
  return (
    <div id="hospitals">
      <div className="mx-5 mt-5">
        <h4 className="mt-5">Public Hospitals</h4>
        <Row xs={1} md={2} lg={3} className="g-4">
          {allHospital.map((hospital) => (
            <Hospital hospital={hospital}></Hospital>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Hospitals;
