import React from "react";
import { Container } from "../styles.js";

export default ({ title, value, description }) => {
  const RenderUnit = () => {
    switch (title) {
      case "Wind Status":
        return "km/h";
        break;
      case "Rain":
        return "%";
        break;
      case "Visibility":
        return "km";
        break;
      default:
        return ''
        break;
    }
  };
  const renderDescription = () => {
    if (title === "Air Quality") {
      if (value < 50) return "Good";
      else if (value > 50 && value <= 100) return "Moderate";
      else if (value > 100 && value <= 150)
        return "Unhealthy for Sensitive Groups";
      else if (value > 150 && value <= 200) return "Unhealthy";
      else if (value > 200 && value <= 300) return "Very Unhealthy";
      else return "Hazardous";
    } else return description;
  };
  return (
    <Container>
      <h6>{title}</h6>
      <h1>{`${value ? value : 0}  ${RenderUnit()}`} </h1>
      <h3>{renderDescription()}</h3>
    </Container>
  );
};
