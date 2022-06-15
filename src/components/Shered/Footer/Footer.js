import { color } from "@mui/system";
import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-info mt-5">
      <Container>
        <Form className="pt-3">
          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email Address*" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Subject*" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Your Message*" />
          </Form.Group>

          <Button
            variant="info"
            style={{ width: "200px", height: "50px" }}
            type="submit"
            size="lg"
            className="bg-info"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default Footer;
