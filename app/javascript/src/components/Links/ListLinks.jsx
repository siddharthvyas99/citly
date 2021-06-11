import React from "react";
import Table from "./Table";

const ListLinks = ({ data, handlePin, handleClick }) => {
  return <Table data={data} handlePin={handlePin} handleClick={handleClick} />;
};

export default ListLinks;
