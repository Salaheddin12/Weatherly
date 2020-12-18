import React from "react";
import Search from "../common/Search";
import Temperature from "../common/Temperature";
import Container, { Loading } from "./styles";
export default ({ details, handleSubmit, loading }) => {
  return (
    <Container>
      {loading ? (
        <Loading>
          <h1> loading ...</h1>
        </Loading>
      ) : (
        <>
          <Search onSubmit={handleSubmit} />
          <Temperature data={details} />
        </>
      )}
    </Container>
  );
};
