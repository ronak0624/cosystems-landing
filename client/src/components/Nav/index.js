import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse justify-content-md-center collapse">
        <ul className="navbar-nav">
          <a className="navbar-brand" href="/">CoSystems Inc</a>
          <li className="nav-item active">
            <a className="nav-link" href="#">About</a>
          </li>
          <li>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PSTN Access Modules</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Data Interface Modules</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">PSTN Access to IP Systems</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">PSTN Access to IP Module</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Protocol Stacks</NavDropdown.Item>
            </NavDropdown>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;