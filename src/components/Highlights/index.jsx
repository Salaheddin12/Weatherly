import React from "react";
import UVIndex from "./Cards/UVIndex";
import Card from "./Cards/Card";
import Sun from "./Cards/Sun";
import styled from "styled-components";

export default ({ current }) => {
  console.log("current", current);
  const { sunrise, sunset, uvi, visibility, wind_speed, rain } = current;
  const rainValue = rain ? rain["1h"] : 0;

  return (
    <>
      <h3>Today's Hightlights</h3>
      <Container>
        <UVIndex value={uvi} />
        <Card title="Wind Status" value={Math.floor(wind_speed * 3.6)} />
        <Sun sunset={sunset} sunrise={sunrise} />
        <Card title="Rain" value={rainValue} />
        <Card title="Visibility" value={Math.floor(visibility / 1000)} />
        <Card title="Air Quality" value={10} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  h6 {
    font-size: 22px;
    font-family: "Fira Sans", sans-serif;
  }
`;
