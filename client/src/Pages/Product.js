import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios'

import {useLocation} from "react-router-dom";

import ProductNav from '../components/ProductNav';
import ProductInfo from '../components/ProductInfo';

import './styles/products.css';

// A custom hook that builds on useLocation to parse
// the query string.
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

var productTitle = "";
var productSummary = "";
var imagePath = "";

export default function Product() {
    const product = useQuery().get("name");
    axios.get('/api/products/' + product).then((res) => {
        productTitle = res.data.productTitle
        productSummary = res.data.summary
        console.log(res.data)
        imagePath = "//localhost:3001/preview/" + res.data.preview
    })
    
        return (
            <div>
                <Container className="mt-5">
                    <ProductNav />
                    <ProductInfo title={productTitle} summary={productSummary} imagePath={imagePath} />
                    {/* <Row>
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
                        <Col md="6">
                            <img src={images[this.imgPath]}></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Related Products</h2>
                            <ul className="product-nav">
                                {this.state.related.map(product => (
                                    <li>{product}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row> */}
                </Container>
            </div>
        )
}
