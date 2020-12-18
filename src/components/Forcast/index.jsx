import React from "react";
import Card from "../common/Card";
import styled from "styled-components";

export default ({ daily }) => {
  daily = daily.slice(0, 7);
  return (
    <Container>
      {daily.map((item, index) => (
        <Card key={index} dailyData={item} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-between;
`;
