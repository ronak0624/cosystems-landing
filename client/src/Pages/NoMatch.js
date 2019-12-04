import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

function NoMatch() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>404 Page Not Found</h1>
        <p>
          🙄
        </p>
      </Container>
    </Jumbotron>
  );
}

export default NoMatch;
