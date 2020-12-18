import React from "react";
import styled from "styled-components";
export default ({ data }) => {
  const { city, humidity, temperature, feelsLike, icon } = data;
  console.log(icon);
  const FormateDate = () => {
    const date_now = new Date();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date_now.getMonth()];
    const date = date_now.getDate();
    return { month, date };
  };
  const date = FormateDate();
  return (
    <Container>
      <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="icon" />
      <div>
        <Temp>{temperature} °C</Temp>
        <h3>
          {date.month}, <span>{date.date}</span>
        </h3>
      </div>
      <Separator />
      <Description>
        <span>{feelsLike}</span>
        <span>humidity - {humidity}%</span>
      </Description>
      <h1>{city}</h1>
    </Container>
  );
};
const Temp = styled.h1`
  margin: 1rem 0;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 80vh;
  align-content: space-between;
  font-family: "PT Sans", sans-serif;
  @media screen and (max-width: 960px) {
    flex-flow: row wrap;
    height: 100%;
    vertical-align: middle;
    * {
      margin: 0 5px;
      padding: 1rem 0;
    }
  }
  /* justify-content: space-evenly; */
  span,
  h3 {
    letter-spacing: 1px;
  }
  span {
    margin: 0.5rem 0;
  }
`;
const Separator = styled.div`
  margin: 3rem 0;
  background-color: darkgray;
  height: 1px;
`;

const Description = styled.div`
  font-size: 22px;
  margin-bottom: 3rem;
  span {
    display: block;
    margin: 0.75rem 0;
  }
`;
