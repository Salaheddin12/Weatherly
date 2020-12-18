import React, { useState } from "react";
import { SearchInput } from "./styles";
export default ({ onSubmit }) => {
  
  const [search, setSearch] = useState("");

  const handleSearch = (query) => {
    setSearch(query);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(search);
      }}
    >
      <SearchInput
        onChange={(e) => handleSearch(e.currentTarget.value)}
        placeholder="Search for places"
        value={search}
      />
    </form>
  );
};
