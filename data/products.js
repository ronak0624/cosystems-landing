var products = [
    {
      "dropdown1": "PSTN Access Modules",
      "dropdown2": "ISDN-PRI (TE & NT)",
      "dropdown3": "-",
      "productTitle": "ISDN-PRI (TE & NT)",
      "pdf": "PG4800PR-Rev1.3.pdf",
      "summary": "PG4800PR is a high density T1/E1 ISDN PRI CompactPCI module available to developers and systems integrators to rapidly add  ISDN PRI functions for diverse telecommunications equipment, PBX and signaling conversion systems. The ISDN-PRI software supports CCITT Q.931/932, Q.921/922, I.430 and is fully configurable for world-wide class 5 switches as TE or to PBXs as NT, and is guaranteed for local homologation. Onboard software is pre-ploaded and controllable from CompactPCI host. Sample host applications for a variety of operating systems including Linux and RTOS are provided in source code to aid quick integration.",
      "relatedtitle": "ISDN cPCI Card with 16 T1/E1",
      "related": ["CoISDN.pdf"]
    },
    {
      "dropdown1": "PSTN Access Modules",
      "dropdown2": "GR-303 (RDT & IDT)",
      "dropdown3": "-",
      "productTitle": "GR-303 (RDT & IDT)",
      "pdf": "PG4800GR-Rev1.2.pdf",
      "summary": "PG4800GR is high density Telcordia GR-303 access signalling platform available to developers and systems integrators to rapdily develop remote digital terminals to connect to North American Class 5 switches or to implement the IDT functionality of a Class 5 switch to terminate exisitng RDTs thus supporting migraion TDM to IP based routed networks. It supports up-to 16 T1 interfaces and can be  configured partly as IDT and/or RDT. All 384 TDM channels are routed on the cPCI TDM backplane. Onboard software is pre-ploaded and controllable from CompactPCI host. Sample host applications for a variety of operating systems including Linux and RTOS are provided in source code to aid quick integration.",
      "relatedtitle": "GR-303 cPCI Card with 16 T1",
      "related": ["CoGR303.pdf","V4800IP_Datasheet_v4.2.pdf","Convertix-GR303_Datasheet_v4.2.pdf"]
    },
    {
      "dropdown1": "PSTN Access Modules",
      "dropdown2": "V5.1 & V5.2 (AN & LE)",
      "dropdown3": "-",
      "productTitle": "V5.1 & V5.2 (AN & LE)",
      "pdf": "PG4800V5-Rev1.2.pdf",
      "summary": "PG4800V5 is high density ETSI compliant E1 access signalling platform available to developers and systems integrators to rapdily develop remote digital terminals to connect to ETSI Class 5 switches or to implement the LE functionality of a Class 5 switches to terminate exisitng ANs thus supporting migration of  TDM to IP based routed networks. It supports up-to 16 E1 interfaces and can be  configured partly as IDT and/or RDT. All 480 TDM channels are routed on the cPCI TDM backplane. Onboard software is pre-ploaded and controllable from CompactPCI host. Sample host applications for a variety of operating systems including Linux and RTOS are provided in source code to aid quick integration.",
      "relatedtitle": "V5.x cCPCI Card with 16 E1",
      "related":["CoV5.2.pdf","V4800IP_Datasheet_v4.2.pdf","Convertix-V5_Datasheet_v4.2.pdf"]
    },
    {
      "dropdown1": "Data Interface Modules",
      "dropdown2": "Frame Relay",
      "dropdown3": "-",
      "productTitle": "Frame Relay",
      "pdf": "DC4800FR-Rev1.2.pdf",
      "preview": "DC4800FR-Rev1.2.png",
      "summary": "DC4800FR is a high-density data communication CompactPCI module  capable of generating and processing Frame Relay traffic mulriple T1/E1/J1 interfaces - up to 16 interfaces can be configured. The on-board software  implement sthe industry-standard Frame Relay protocols and associated standards as defined by ANSI, Frame Relay Forum (FRF), ITU/CCITT, and the IETF. DC4800FR supports both Permanent Virtual Circuit (PVC) connections and Switched Virtual Circuit (SVC) connections across public and private Frame Relay networks.The platform can be rapidly integrated and deployed for high-performance and high density Frame Relay communications to a myriad of end points. Sample host applications for a variety of operating systems including Linux and RTOS are provided in source code to aid quick integration.",
      "relatedtitle": "Frame Relay cPCI Card with 16 T1/E1",
      "related": [ "CoFrameRelay.pdf"]
    },
    {
      "dropdown1": "Data Interface Modules",
      "dropdown2": "MultiLink-PPP",
      "dropdown3": "-",
      "productTitle": "MultiLink-PPP",
      "pdf": "DC4800PPP-ML-Rev3.3.pdf",
      "preview": "DC4800PPP-ML-Rev3.3.png",
      "summary": "DC4800PP is a MultiLink PPP  based data communication platform implemented as a CompactPCI module, capable of generating and processing PPP/ML-PPP traffic on up to 16  T1/E1 interfaces simultabneously and a 100 mbps fast Ethernet connection.  16 E1 connections fully utilized can offer WAN connection of 32 mbps. The fully configurable on-board software is a  scalable s implementation of the IETF-defined family of protocols: Point-to-Point Protocol (PPP),  MultiLink PPP (ML-PPP) Protocol, Bandwidth Allocation Control Protocol (BAP/BACP) and related standards. The module can also be configured with CoVPN software to implement end to end VPN connectivity. Sample host applications for a variety of operating systems including Linux and RTOS are provided in source code to aid quick integration.",
      "relatedtitle": "MLPPP cPCI Card with 16 T1/E1",
      "related": ["CoPPP-ML.pdf","CoVPN.pdf"]
    },
    {
      "dropdown1": "PSTN Access to IP Systems",
      "dropdown2": "GR-303 to IP",
      "dropdown3": "-",
      "productTitle": "GR-303 to IP",
      "pdf": "Convertix-GR303_Datasheet_v4.2.pdf",
      "summary": "Convertix-GR303 is a powerful PSTN to Voice-over-IP conversion system supporting 16 x T1 GR303 interfaces to DLC or Class 5 switch and a 1Gb/sec VoIP Ethernet interface to IP networks. Convertix-GR303 is a complete, fully integrated system ready for building carrier solutions to implement VoIP centric networks at both at the access layer and at the central office switch.",
      "relatedtitle": "GR303-IP cCPCI Card with 16 T1",
      "related": ["CoGR303,pdf","V4800IP_Datasheet_v4.2.pdf","Convertix-GR303_Datasheet_v4.2.pdf"]
    },
    {
      "dropdown1": "PSTN Access to IP Systems",
      "dropdown2": "V5.x to IP",
      "dropdown3": "-",
      "productTitle": "V5.x to IP",
      "pdf": "Convertix-V5_Datasheet_v4.2.pdf",
      "summary": "Convertix VConvertix-V5 is a powerful PSTN to Voice-over-IP conversion system supporting 16 x E1 V5.2/1/CAS/MF interfaces to PSTN networks and a 100 Mb/sec VoIP Ethernet interface to IP networks. Convertix-V5 is a complete, fully integrated system ready for building carrier solutions to implement VoIP centric networks at both at the access layer and at the central office switch point V5.2.",
      "relatedtitle": "V5.x-IP cPCI Card with 16 E1",
      "related": ["CoV5.2.pdf","V4800IP_Datasheet_v4.2.pdf","Convertix-V5_Datasheet_v4.2.pdf"]
    },
    {
      "dropdown1": "PSTN Access to IP Module",
      "dropdown2": "-",
      "dropdown3": "-",
      "productTitle": "PSTN Access to IP Module",
      "pdf": "V4800IP_Datasheet_v4.2.pdf",
      "summary": "EdgeBladeTM V4800IP is a powerful PSTN to Voice-over-IP conversion blade fully ready for integration in the CompactPCI form-factor based network nodes. Supporting 16 x E1 V5.2/1/CAS/MF interfaces to PSTN and a 100 Mb/sec VoIP Ethernet interface to IP networks, V4800IP is a complete, fully integrated module ready for building carrier solutions to implement VoIP centric networks at both at the access layer and at the central office switch point.",
      "relatedtitle": "Multiprotocol - IP cPCI Card with DSP",
      "related": ["CoISDN.pdf","CoGR303,pdf","CoV5.2.pdf","CoMGCP.pdf","CoSIP.pdf"]
    },
    {
      "dropdown1": "Protocol Stacks",
      "dropdown2": "Data Protocols",
      "dropdown3": "Frame Relay",
      "productTitle": "Frame Relay",
      "pdf": "CoFrameRelay.pdf",
      "summary": "CoFRelay is a portable software source code and binary implementation of industry-standard Frame Relay protocols and associated standards as defined by ANSI, Frame Relay Forum (FRF), ITU/CCITT, and the IETF. CoFRelay supports both Permanent Virtual Circuit (PVC) connections and Switched Virtual Circuit (SVC) connections across public and private Frame Relay networks. Implemented as a set of highly portable and efficient STREAMS modules, CoFRelay can be rapidly integrated in embedded systems and computer platforms, adding high-performance Frame Relay communications to many different hardware devices.",
      "relatedtitle": "'C' Source Frame Relay Stack",
      "related": ["DC4800FR-Rev1.2.pdf"]
    },
    {
      "dropdown1": "Protocol Stacks",
      "dropdown2": "Data Protocols",
      "dropdown3": "Multi-link PPP",
      "productTitle": "Multi-link PPP",
      "pdf": "CoPPP-ML.pdf",
      "summary": "CoPPP-ML is a portable, scaleable software implementation of the IETF-defined Point-to-Point Protocol (PPP), MultiLink PPP (ML-PPP) Protocol, Bandwidth Allocation Control Protocol (BAP/BACP) and related standards. Implemented  in ANSI 'C' for rapid portation to any environment, CoPPP-ML is based on a layered STREAMS multiplexor architecture that has been optimized for high bandwidth data throughput.",
      "relatedtitle": "'C' Source ML-PPP Stack",
      "related": ["DC4800PPP-ML-Rev3.3.pdf"]
    },
    {
      "dropdown1": "Protocol Stacks",
      "dropdown2": "Data Protocols",
      "dropdown3": "VPN",
      "productTitle": "VPN",
      "pdf": "CoVPN.pdf",
      "summary": "CoVPN permits the establishment and maintenance of secure, private end-to-end �tunnels� between geographically distributed network devices. As defined by the IETF, the Layer 2 Tunneling Protocol (L2TP) allows encapsulated data to be securely transmitted over the Internet or an Intranet, ensuring the integrity and authenticity of data.",
      "relatedtitle": "C' Source VPN Stack",
      "related": ["DC4800PPP-ML-Rev3.3.pdf"]
    },
    {
      "dropdown1": "Protocol Stacks",
      "dropdown2": "Data Protocols",
      "dropdown3": "X.25",
      "productTitle": "X.25",
      "pdf": "CoX.25.pdf",
      "summary": "CoX.25 is a comprehensive software implementation of CCITT/ITU and ISO X.25 definitions that can be rapidly ported to target hardware platforms such as multi-protocol adapters, multiplexors, circuit switching equipment, wireless/RF interfaces and routers.",
      "relatedtitle": "'C' Portable X.25 Stack",
      "related": []
    },
    {
      "dropdown1": "Protocol Stacks",
      "dropdown2": "PSTN Protocols",
      "dropdown3": "ISDN-BRI & PRI (TE & NT)",
      "productTitle": "ISDN-BRI & PRI (TE & NT)",
      "pdf": "CoISDN.pdf",
      "summary": "CoISDN is a complete implementation of Basic and Primary rate interfaces for implementing multiple connections as either TE or NT. Created as a set of layered STREAMS modules, available are LAPD, Q.931 and worldwide variations with the supporting configuration and management functions. CoISDN is written in �C�, is very light weight and successfully implemented in a variety of OS including VxWORKS, pSOS, VRTX, Unix, Solaris and Windows NT.",
      "relatedtitle": "C' Source ISDN BRI/PRI Stack",
      "related": ["PG4800PR-Rev1.3.pdf","V4800IP_Datasheet_v4.2.pdf"]
    },
    {
      "dropdown1": "Protocol Stacks",
      "dropdown2": "PSTN Protocols",
      "dropdown3": "GR-303 (RDT & IDT)",
      "productTitle": "GR-303 (RDT & IDT)",
      "pdf": "CoGR303,pdf",
      "summary": "CoGR-303 is a �C� language software implementation of the\nindustry GR-303-CORE specification that meets TMC operational criteria\nfor creating host-side integrated digital terminal (IDT) and/or remote digital\nterminal (RDT) digital loop carrier signaling devices. CoGR-303 software modules and test programs are designed and created using industry-standard STREAMS, an efficient and well documented resource management environment. For platforms that lack native STREAMS, CoSystems offers CoSTREAMS, a small footprint implementation that provides a common operating environment for all CoSystems protocol stacks andthird-party applications. To shorten project development and reduce time-to-market, CoGR-303 is available in pre-ported binary format or source code for pSOS, VxWORKS, Nucleus (call for availability) and Solaris (x86, SPARC) for a variety of microprocessors and computer systems.",
      "relatedtitle": "'C' Source GR-303 IDT/RDT Stack",
      "related": ["PG4800GR-Rev1.2.pdf","Convertix-GR303_Datasheet_v4.2.pdf"]
    },
    {
      "dropdown1": "Protocol Stacks",
      "dropdown2": "PSTN Protocols",
      "dropdown3": "V5.1 & V5.2 (AN & LE)",
      "productTitle": "V5.1 & V5.2 (AN & LE)",
      "pdf": "CoV5.2.pdf",
      "summary": "CoV5.2 is a modular �C� language implementation of ETSI V5.2 universal signaling requirements for Access Network (AN) and Local Exchange (LE) devices. CoV5.2 provides management support for the following V5.2/V5.1 access types: analog(PSTN), ISDN-BRI, ISDN-PRI with Analog or digital accesses for semi-permanent connections without associated out-band signaling information, with flexible bearer channel allocation on a per-call basis. CoV5.2 is comprised of customizable applications (Link Manager, PSTN, Digital Section, and Qx), Layer 3 management protocol multiplexors, distributed Layer 2 multiplexed envelope functions, and Layer 1 support for popular processors and framers.  To shorten project development and reduce time-to-market, CoGR-303 is available in pre-ported binary format or source code for pSOS, VxWORKS, Nucleus (call for availability) and Solaris (x86, SPARC) for a variety of microprocessors and computer systems.",
      "relatedtitle": "'C' Source V5.x AN/LE Stack",
      "related": ["PG4800V5-Rev1.2.pdf","Convertix-V5_Datasheet_v4.2.pdf"]
    },
    {
      "dropdown1": "Protocol Stacks",
      "dropdown2": "VoIP Protocols",
      "dropdown3": "H.323",
      "productTitle": "H.323",
      "pdf": "CoH.323.pdf",
      "summary": "CoH.323 is a 'C' source code modular implemetation of the  ITU-T H.323 standard, which was originally developed for video conferencing using non-guaranteed quality of service LANs, has emerged as a standard for voice/video communication over the Internet. CoH.323 implementation includes Q.9312 (call control) video conferencing with telephony call control (H.245), RAS network management protocol, RTP and RTCP protocols for packetization and synchronization of media, audio codecs (G.711, G.728, G.729A and G.723.1) and video codecs (H.261 and H.263).",
      "relatedtitle": "'C' Source H.323 VoIP Stack",
      "related": []
    },
    {
      "dropdown1": "Protocol Stacks",
      "dropdown2": "VoIP Protocols",
      "dropdown3": "MGCP",
      "productTitle": "MGCP",
      "pdf": "CoMGCP.pdf",
      "summary": "CoMGCP is a 'C' source code level  implementation of the  communication protocol MGCP for call control between Media Gateways (MG) and Media Gateway Controllers (MGC) based on RFC 2705 BIS. One layer of stack lies on MG and other one on MGC. Both parts of the stack are available for guaranteed interpoerability with any other indutry standard implementations. The stack supports mnay-to-many configurations of soft-switches and media gateways.",
      "relatedtitle": "'C' Source MGCP Stack",
      "related": ["V4800IP_Datasheet_v4.2.pdf"]
    },
    {
      "dropdown1": "Protocol Stacks",
      "dropdown2": "VoIP Protocols",
      "dropdown3": "SIP",
      "productTitle": "SIP",
      "pdf": "CoSIP.pdf",
      "summary": "CoSIP is a 'C' source code implementation of the text based Session Initiation Protocol, as defined by IETF in RFC 2543 -  using which a user can establish, modify, and terminate multimedia sessions or calls within an IP network. CoSIP includes implementation of SIP, SDP, RTP/RTCP and RSVP protocol suites. SDP protocol (RFC 2327) describes the session for the call while RTP and RTCP are necessary for the transmission of real time data. RSVP handles all the resource management and provides for Quality of Service. CoSIP comes with two main components, namely User Agent and Network Server.CoSIP can invite parties to both unicast and multicast sessions and it is independent of the type of session being established.",
      "relatedtitle": "C' Source SIP Stack",
      "related": ["V4800IP_Datasheet_v4.2.pdf"]
    }
  ]
module.exports = products;