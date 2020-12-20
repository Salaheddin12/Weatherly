import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Aside from "./components/Aside";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

function App() {
  const [data, setData] = useState({
    city: "Rabat",
    temperature: 0,
    humidity: 0,
    feelsLike: "",
    icon: "04d",
  });
  const [coord, setCoord] = useState({ lat: -6.84, lon: 33.99 });

  const handleSubmit = (query) => {
    setData({ city: query });
  };

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${data.city}&units=metric&appid=${process.env.REACT_APP_APIKEY}`
      )
      .then((response) => {
        const { data } = response;
        setData({
          city: data.name,
          temperature: Math.floor(data.main.temp),
          humidity: data.main.humidity,
          feelsLike: data.weather[0].description,
          icon: data.weather[0].icon,
        });
        setCoord(data.coord);
      });
      setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [data.city]);

  return (
    <Container className="App">
      <Wrapper>
        <Aside details={data} handleSubmit={handleSubmit} loading={loading} />
      </Wrapper>
      <Main coord={coord} />
    </Container>
  );
}

export default App;
const Wrapper = styled.div`
  height: 100vh;
  min-width: 264px;

  @media screen and (max-width: 960px) {
    height: 264px;
    position: relative;
  }
`;
const Container = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
  /* display:grid;
  grid-template-areas:  'aside main main main main'; */
`;
