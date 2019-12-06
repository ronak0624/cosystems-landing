import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse justify-content-md-center collapse py-3">
        <ul className="navbar-nav">
          <a className="navbar-brand" href="/"><b>CoSystems Inc</b></a>
          <li className="nav-item mx-5">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link" href="/products">Products</a>
          </li>
          {/* <li>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PSTN Access Modules</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Data Interface Modules</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">PSTN Access to IP Systems</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">PSTN Access to IP Module</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Protocol Stacks</NavDropdown.Item>
            </NavDropdown>
          </li> */}
          <li className="nav-item mx-5">
            <a className="nav-link" href="/support">Support</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;