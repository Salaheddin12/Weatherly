import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Container>
      <Forcast>
        <li>Today</li>
        <li style={{ borderBottom: "2px solid #17202a" }}>Week</li>
      </Forcast>
      <Units>
        <li>°F</li>
        <li>°C</li>
      </Units>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  > div {
    display: inline-block;
  }
`;

const Forcast = styled.div`
  height: 100%;
  > li {
    display: inline-block;
    margin: 0 0.5rem;
    font-size: 20px;
    font-family: "Fira Sans", sans-serif;
    cursor: pointer;
  }
`;

const Units = styled.div`
  > li {
    display: inline-block;
    background-color: #303030;
    color: white;
    margin: 0 0.5rem;
    width: 25px;
    padding: 0.5rem;
    font-size: 20px;
    font-family: "Fira Sans", sans-serif;
    cursor: pointer;
    border-radius: 50%;
  }
`;
