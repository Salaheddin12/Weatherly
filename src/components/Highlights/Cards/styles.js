import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 320px;
  height:190px;
  padding: 1.5rem;
  display:flex;
  flex-flow:column nowrap;
  justify-content:space-between;
  margin: 1rem 0;
  max-height: 250px;
  border-radius: 10px;
  box-shadow:  2px 2px 10px #17202a;
  box-sizing:border-box;
  font-family: "Fira sans",sans-serif;
  * {
    display: block;
  }
  h1{
    font-size:45px;
  }
  h6 {
    font-size: 18px;
    color:darkgray;
  }
  h3,img {
    display:inline-block;
  }
  h3{
    margin-left:15px;
  }
  img{
    width:40px;
  }
`;