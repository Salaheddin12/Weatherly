import React, { useState, useEffect } from "react";
import axios from "axios";
import Forcast from "../Forcast";
import Header from "../Header";
import Highlights from "../Highlights";
import styled from "styled-components";
export default ({ coord }) => {
  const { lat, lon } = coord;

  const [currentData, setCurrentData] = useState({});

  const [dailyData, setDailyData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [forcast, setForcast] = useState("DAILY");

  const [units, setUnits] = useState("metric");

  const onMetricChange = (value) => {
    setUnits(value);
  };
  const setForcastFilter = (value) => {
    setForcast(value);
  };

  const fetchData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.REACT_APP_APIKEY}`
      )
      .then((response) => {
        const { daily, hourly, current } = response.data;
        setCurrentData(current);
        setDailyData(daily);
        setHourlyData(hourly);
      });
  };
  useEffect(() => {
    fetchData();
  }, [units]);
  return (
    <Main>
      <Header
        forcast={forcast}
        units={units}
        onMetricChange={onMetricChange}
        onForcastChange={setForcastFilter}
      />
      <Forcast forcast={forcast} daily={dailyData} hourly={hourlyData} />
      <Highlights coord={coord} current={currentData} />
    </Main>
  );
};

const Main = styled.div`
  grid-area: main;
  background-color: #f8f9f9;
  display: flex;
  min-height: 100vh;
  flex-flow: column nowrap;
  padding: 2rem;
  box-shadow: inset 3px 3px 15px rgba(164, 164, 164, 0.8);
`;
