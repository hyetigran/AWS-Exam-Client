import React from "react";
import { Navbar, NavLink, NavbarBrand, Nav } from "reactstrap";

const Navigation: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <NavbarBrand href="#home">Free AWS Exams</NavbarBrand>
      <Nav className="mr-auto">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#features">History</NavLink>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
