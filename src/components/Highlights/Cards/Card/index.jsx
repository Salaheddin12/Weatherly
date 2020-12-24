import React from "react";
import { Container } from "../styles.js";

export default ({ title, value, description }) => {
  const RenderUnit = () => {
    switch (title) {
      case "Wind Status":
        return "km/h";
      case "Rain":
        return "%";
      case "Visibility":
        return "km";
      default:
        return "";
    }
  };
  const renderDescription = () => {
    if (title === "Air Quality") {
      switch (value) {
        case 1:
          return "Good";
        case 2:
          return "Fair";
        case 3:
          return "Moderate";
        case 4:
          return "Poor";
        default:
          return "Very Poor";
      }
    }
    return description;
  };
  return (
    <Container>
      <h6>{title}</h6>
      <h1>{`${value ? value : 0}  ${RenderUnit()}`} </h1>
      <h3>{renderDescription()}</h3>
    </Container>
  );
};
