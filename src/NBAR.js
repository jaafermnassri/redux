import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const NBAR = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to={"/tasks"}>Tasks</Link>
            <Nav className="me-auto">
              <Link to={"/done"}>Done Tasks</Link>
              
              {/* <Link to={"/movies/id"}>Details</Link> */}
              <Link to={"/undone"}>Undone Tasks</Link>
              
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default NBAR;
