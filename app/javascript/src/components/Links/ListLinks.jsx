import React from "react";
import Table from "./Table";

const ListLinks = ({ data, handlePin }) => {
  return <Table data={data} handlePin={handlePin} />;
};

export default ListLinks;
