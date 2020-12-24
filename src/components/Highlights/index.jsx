import React, { useState, useEffect } from "react";
import UVIndex from "./Cards/UVIndex";
import Card from "./Cards/Card";
import Sun from "./Cards/Sun";
import styled from "styled-components";
import axios from "axios";

export default ({ current, coord }) => {
  const { lat, lon } = coord;
  const [airPollution, setAirPollution] = useState(0);
  const { sunrise, sunset, uvi, visibility, wind_speed, rain } = current;
  const rainValue = rain ? rain["1h"] : 0;

  const fetchData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_APIKEY}`
      )
      .then((response) => {
        const { aqi } = response.data.list[0].main;
        setAirPollution(aqi);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h3>Today's Hightlights</h3>
      <Container>
        <UVIndex value={uvi} />
        <Card title="Wind Status" value={Math.floor(wind_speed * 3.6)} />
        <Sun sunset={sunset} sunrise={sunrise} />
        <Card title="Rain" value={rainValue} />
        <Card title="Visibility" value={Math.floor(visibility / 1000)} />
        <Card title="Air Quality" value={airPollution} />
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
