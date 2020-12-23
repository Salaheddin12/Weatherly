import React from "react";
import Card from "../common/Card";
import styled from "styled-components";

export default ({ daily, hourly, forcast }) => {
  daily = daily.slice(0, 7);
  hourly = hourly.filter((currentValue, index) => index % 4 === 0);
  console.log(hourly);
  return forcast === "DAILY" ? (
    <Container>
      {daily.map((item, index) => (
        <Card forcast={forcast} key={index} Data={item} />
      ))}
    </Container>
  ) : (
    <Container>
      {hourly.map((item, index) => (
        <Card forcast={forcast} key={index} Data={item} />
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
