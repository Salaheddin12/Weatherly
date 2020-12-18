import React from "react";
import { Container } from "../styles.js";
export default ({ value }) => {
  return (
    <Container>
      <h6>UV Index</h6>
      <h1>{value}</h1>
    </Container>
  );
};
