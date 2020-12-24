import React from "react";
import formateDate from "../../../../utils/index";
import { Container } from "../styles.js";
import Sunset from "../../../../images/sunset.png";
import Sunrise from "../../../../images/sunrise.png";

export default ({ sunrise, sunset }) => {
  return (
    <Container>
      <h6>Sunrise & Sunset</h6>
      <span>
        <img src={Sunrise} alt="sunrise"/>
        <h3>{formateDate(sunrise, "HOURS")}</h3>
      </span>
      <span>
        <img src={Sunset} alt='sunset' />
        <h3>{formateDate(sunset, "HOURS")}</h3>
      </span>
    </Container>
  );
};
