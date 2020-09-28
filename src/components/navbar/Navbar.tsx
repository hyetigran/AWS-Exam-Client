import React from "react";
import { Navbar, NavLink, NavbarBrand, Nav } from "reactstrap";

const Navigation: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <NavbarBrand href="/">Free AWS Exams</NavbarBrand>
      <Nav className="mr-auto">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/exam-review">History</NavLink>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
