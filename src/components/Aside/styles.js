import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 10;
  background-color: #fff;
  padding: 2rem;
  height: 100vh;
  min-width: 264px;
  /* grid-area: aside; */
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    height: 264px;
    position:relative;
  }
`;

export const Loading = styled.div`
  color: #273746;
  width: 100%;
  text-align: center;
`;

export default Container;
