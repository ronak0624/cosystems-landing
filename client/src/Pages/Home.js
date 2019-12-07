import React, { Component } from 'react'
import {browserHistory} from 'react-router'
import './styles/home.css'

export default class Home extends Component {

    buttonPath = (path) => {
        window.location.href = path
    }
    
    render() {
        return (
            <div>
                <div class="header">
                    <h1>The Technology Source for Communication Solutions</h1>
                </div>

                <div class="content">


                    <a name="about"></a>

                    <section class="story">


                        <div class="container-fluid">

                            <div class="section-data">

                                <div class="row">
                                    <div class="col-md-1"></div>
                                    <div class="col-md-1 section-index wow fadeInUp" data-wow-delay="0.3s">01</div>
                                    <div class="col-md-10 section-heading wow fadeInUp" data-wow-delay="0.4s">About us</div>
                                </div>

                                <div class="row">
                                    <div class="col-md-2"></div>
                                    <div class="col-md-8 section-subheading wow fadeInUp" data-wow-delay="0.5s"><h1>Founded in 1981, CoSystems achieved a milestone in 2011 - 30 years of continuous success.</h1></div>
                                </div>

                                <div class="row">
                                    <div class="col-md-2"></div>
                                    <div class="col-md-8 section-info wow fadeInUp" data-wow-delay="0.6s">CoSystems, headquartered in the Silicon Valley, is a leading edge technology solution provider
                                        to global telecom equipment manufacturers and enterprise customers. CoSystems offers ready to
                                        deploy solutions for packetizing the edge of the PSTN networks. Our EdgeBlade™ family of
                                        products
                                        helps customers meet the challenges of migrating from legacy TDM voice networks to the packet
                                        domain.
                                        Our solutions include signal conversion, access gateways, signaling gateways, and media
                                        gateways.
                                    <a href="/products" className="d-block mt-4 btn-link">Learn about our products</a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>

                    <a name="services"></a>

                    <section class="services">

                        <div class="container-fluid">

                            <div class="section-data">

                                <div class="row">
                                    <div class="col-md-1"></div>
                                    <div class="col-md-1 section-index wow fadeInUp color-white" data-wow-delay="0.3s">02</div>
                                    <div class="col-md-8 section-heading wow fadeInUp" data-wow-delay="0.4s">What we do</div>
                                </div>

                                <div class="row service">
                                    <div class="col-md-2"></div>
                                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                                        <div class="icon">
                                            <h4 className="color-white">Our history</h4>
                                        </div>
                                        <div class="icon-title">
                                            CoSystems, headquartered in the Silicon Valley, develops and deploys complete solutions for
                                            Packetizing the Edge of the PSTN networks.
                                            Backed by a 22-year existence in the communications technology horizon, CoSystems is dedicated to
                                            delivering complex systems and
                                            building blocks to telecom operators, ISPs, Cable Operators, MSOs, and to the emerging wireless
                                            voice and packet infrastructure markets.
                                            CoSystems addresses the market needs through a network of distributors, VARs, Systems Integrators
                                            and service providers across the globe.
                                    </div>
                                    </div>

                                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                                        <div class="icon">
                                            <h4 className="color-white">Our expertise</h4>
                                        </div>
                                        <div class="icon-title">
                                        CoSystems has a meritorious track record in the areas of Hardware Development for Signal
                      Conversions products, Access Gateways,
                      Signaling Gateways, Media Gateways, products for Broadband using DSL, Cable and WiFi technology.
                      CoSystems offers ready to
                      deploy solutions for Packetizing the Edge of the PSTN networks. Its EdgeBlade™ Family of products
                      helps customers meet the
                      challenges of migrating from legacy TDM voice networks to the Packet architecture through its
                      clever development and design.
                                          </div>
                                    </div>
                                </div>
                                <div class="row service">
                                    <div class="col-md-2"></div>
                                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                                        <div class="icon">
                                            <h4 className="color-white">Our customers</h4>
                                        </div>
                                        <div class="icon-title">
                                        Cosystems address the needs of Telecom Operators, MSO's, Cable Operators
                                        and System Integrators mainly in the PAC and EMEA markets. Some key accounts
                                        include ADC, AFC, AT&T, BPL, Carrier Access, CISCO, Ericsson, Evolving Systems, Hitachi,
                                            Intel, Lucent, Marconi, Motorola, Nortel, NEC, OKI, OpenTel, Pulsecom, Siemens and SUN.
                                        </div>
                                    </div>

                                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                                        <div class="icon">
                                            <h4 className="color-white">Our expertise</h4>
                                        </div>
                                        <div class="icon-title">
                                            CoSystems has a meritorious track record in the areas of Hardware Development for Signal
                                            Conversions products, Access Gateways,
                                            Signaling Gateways, Media Gateways, products for Broadband using DSL, Cable and WiFi technology.
                                            CoSystems offers ready to
                                            deploy solutions for Packetizing the Edge of the PSTN networks. Its EdgeBlade™ Family of products
                                            helps customers meet the
                                            challenges of migrating from legacy TDM voice networks to the Packet architecture through its
                                            clever development and design.
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>
                </div>
            </div>
        )
    }
}
