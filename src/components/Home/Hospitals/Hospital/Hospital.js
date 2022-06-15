import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Hospital = (props) => {
  const { id, name, address, email, phone, image } = props.hospital;
  return (
    <Col>
      <Card className="bg-info">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-white bold">{name}</Card.Title>
          <Card.Text className="text-white">
            Phone: {phone}
            <br />
            Email: {email}
          </Card.Text>
          <Link to={`appoin/${id}`}>
            <Button className="px-5 text-white" variant="success">
              Appointment
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Hospital;
