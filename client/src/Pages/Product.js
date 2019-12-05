import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './styles/products.css';
import axios from 'axios'

// function ActionLink() {
//     function handleClick(e) {
//       e.preventDefault();
//       console.log('The link was clicked.');
//     }
  
//     return (
      
//     );
//   }

export default class Product extends Component {
    handleClick = () => {
        axios.get("/api/products").then(res =>{
            console.log(res.data);
        });
    }
    
    render() {
        return (
            <div>
                <Container className="mt-5">
                    <Row className="no-gutters">
                        <Col md="3">
                        <ul className="product-nav">
                            <li><a href="#" onClick={this.handleClick}>PTSN Access Modules</a></li>
                                <li className="indent-2">ISDN-PRI (TE & NT)</li>
                                <li className="indent-2">GR-303 (RDT & IDT)</li>
                                <li className="indent-2">V5.1 & V5.2 (AN & LE)</li>
                            <li>Data Interface Modules</li>
                                <li className="indent-2">Frame Relay</li>
                                <li className="indent-2">Multi-Link PPP</li>
                            <li>PSTN Access to IP Systems</li>
                                <li className="indent-2">GR-303 to IP</li>
                                <li className="indent-2">V5.x to IP</li>
                            <li>PSTN Access to IP Module</li>
                            <li>Protocol Stacks</li>
                        </ul>
                        </Col>
                        <Col md="6">
                            <h2 className="mt-4">ISDN-PRI (TE & NT)</h2>
                            <p className="summary">
                            PG4800PR is a high density T1/E1 ISDN PRI CompactPCI module available to developers and systems integrators to rapidly add ISDN PRI functions for diverse telecommunications equipment, PBX and signaling conversion systems. 
                            The ISDN-PRI software supports CCITT Q.931/932, Q.921/922, I.430 and is fully configurable for world-wide class 5 switches as TE or to PBXs as NT, and is guaranteed for local homologation. 
                            Onboard software is pre-ploaded and controllable from CompactPCI host. 
                            Sample host applications for a variety of operating systems including Linux and RTOS are provided in source code to aid quick integration.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Related Products</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
