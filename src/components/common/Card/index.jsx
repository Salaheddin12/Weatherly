import React from "react";
import styled from "styled-components";
import formateDate from "../../../utils/index";

export default ({ dailyData }) => {
  const { weather, temp, dt } = dailyData;
  const { icon } = weather[0];
  const { min, max } = temp;
  return (
    <Card>
      <span>{formateDate(dt, "DAY")}</span>
      <img
        width="100px"
        src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="icon"
      />
      <h6>
        {min}° <span>{max}°</span>
      </h6>
    </Card>
  );
};

const Card = styled.div`
  background-color: white;
  width: 130px;
  text-align: center;
  padding: 0.5rem 0;
  margin: 1rem 0;
  max-height: 250px;
  border-radius: 10px;
  letter-spacing: 1px;
  font-family: "Epilogue";
  * {
    display: block;
  }
  img {
    margin: 0 auto;
  }
  h6 {
    font-size: 12px;
    span {
      color: #566573;
      display: inline-block;
    }
  }
`;
