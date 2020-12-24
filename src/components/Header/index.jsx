import React from "react";

import styled from "styled-components";

export default ({ onForcastChange, onMetricChange, units, forcast }) => {
  const onSelect = (Value) => {
    onForcastChange(Value);
  };

  const activeUnitStyle = { backgroundColor: "#17202a", color: "white" };
  const listStyle = { borderBottom: "2px solid #17202a" };
  return (
    <Container>
      <Forcast>
        <li
          onClick={() => onSelect("HOURLY")}
          style={forcast === "HOURLY" ? listStyle : null}
        >
          Today
        </li>
        <li
          onClick={() => onSelect("DAILY")}
          style={forcast === "DAILY" ? listStyle : null}
        >
          Week
        </li>
      </Forcast>
      <Units>
        <li
          onClick={() => onMetricChange("standard")}
          style={units === "standard" ? activeUnitStyle : null}
        >
          °F
        </li>
        <li
          onClick={() => onMetricChange("metric")}
          style={units === "metric" ? activeUnitStyle : null}
        >
          °C
        </li>
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
    /* background-color: #17202a; */
    border: 2px solid #17202a;
    color: #17202a;
    margin: 0 0.5rem;
    width: 25px;
    padding: 0.5rem;
    font-size: 20px;
    font-family: "Fira Sans", sans-serif;
    cursor: pointer;
    border-radius: 50%;
  }
`;
