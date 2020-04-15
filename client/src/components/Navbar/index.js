import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo1 from "../../images/LOGO1.png";
import MyVerticallyCenteredModal from "../Modal";
import "./style.css";

function NavBar(props) {
  const [modalShow, setModalShow] = React.useState(false);

  


  return (
    <>
<Navbar bg="white" sticky="top" expand="lg">
  <Navbar.Brand href="/"><img alt="Peerless Logo" src={logo1} width="40%"/>     <span className="mx-4" id="slogan">Family owned vending company servicing the Chicagoland area</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
   
      <Button className="text-nowrap" onClick={() => setModalShow(true)} size="lg" variant="danger">Contact Us</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      <MyVerticallyCenteredModal
      {...props}
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
    </>
  );
}

export default NavBar;
