import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './styles/products.css';
import axios from 'axios';

// function ActionLink() {
//     function handleClick(e) {
//       e.preventDefault();
//       console.log('The link was clicked.');
//     }
  
//     return (
      
//     );
//   }

export default class Product extends Component {
    state = {
        title: "",
        summary: "",

    }

    handleClick = (event) => {
        let clickedTitle = event.target.innerText
        axios.get("/api/products/" + clickedTitle).then(res =>{
            this.setState({
                title: res.data.productTitle,
                summary: res.data.summary
            })
        });
    }
    
    render() {
        return (
            <div>
                <Container className="mt-5">
                    <Row>
                        <h2 className="ml-4">Our Products</h2>
                    </Row>
                    <Row className="no-gutters">
                        <Col md="3">
                        <ul className="product-nav">
                            <li>PTSN Access Modules</li>
                            <li className="indent-2">
                                <a href="#" onClick={this.handleClick}>ISDN-PRI (TE & NT)</a>
                            </li>
                            <li className="indent-2">
                                <a href="#" onClick={this.handleClick}>GR-303 (RDT & IDT)</a>
                            </li>
                            <li className="indent-2">
                                <a href="#" onClick={this.handleClick}>V5.1 & V5.2 (AN & LE)</a>
                            </li>
                            <li>Data Interface Modules</li>
                            <li className="indent-2">
                                <a href="#" onClick={this.handleClick}>Frame Relay</a>
                            </li>
                            <li className="indent-2">
                                <a href="#" onClick={this.handleClick}>Multi-link PPP</a>
                            </li>
                            <li>PSTN Access to IP Systems</li>
                            <li className="indent-2">
                                <a href="#" onClick={this.handleClick}>GR-303 to IP</a>
                            </li>
                            <li className="indent-2">
                                <a href="#" onClick={this.handleClick}>V5.x to IP</a>
                            </li>
                            <li>
                                <a href="#" onClick={this.handleClick}>PSTN Access to IP Module</a>
                            </li>
                            <li>Protocol Stacks</li>
                            <li className="indent-2">Data Protocols</li>
                            <li className="indent-3">
                                <a href="#" onClick={this.handleClick}>Frame Relay</a>
                            </li>
                            <li className="indent-3">
                                <a href="#" onClick={this.handleClick}>Multi-link PPP</a>
                            </li>
                            <li className="indent-3">
                                <a href="#" onClick={this.handleClick}>VPN</a>
                            </li>
                            <li className="indent-3">
                                <a href="#" onClick={this.handleClick}>X.25</a>
                            </li>
                            <li className="indent-2">PTSN Protocols</li>
                            <li className="indent-3">
                                <a href="#" onClick={this.handleClick}>ISDN-BRI & PRI (TE & NT)</a>
                            </li>
                            <li className="indent-3">
                                <a href="#" onClick={this.handleClick}>GR-303 (RDT & IDT)</a>
                            </li>
                            <li className="indent-3">
                                <a href="#" onClick={this.handleClick}>V5.1 & V5.2 (AN & LE)</a>
                            </li>
                            <li className="indent-2">VoIP Protocols</li>
                            <li className="indent-3">
                                <a href="#" onClick={this.handleClick}>H.323</a>
                            </li>
                            <li className="indent-3">
                                <a href="#" onClick={this.handleClick}>MGCP</a>
                            </li>
                            <li className="indent-3">
                                <a href="#" onClick={this.handleClick}>SIP</a>
                            </li>
                        </ul>
                        </Col>
                        <Col md="6">
                            <h2 className="mt-4">{this.state.title}</h2>
                            <p className="summary">
                            {this.state.summary}
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
