import React from "react";
import { compose, head, join, juxt, tail, toUpper } from "ramda";

const TableHeader = () => {
  return (
    <thead className="bg-purple-600">
      <tr>
        <th className="w-1 bg-gray-50"></th>
        <th className="px-6 py-3 text-xs font-bold leading-4 tracking-wider text-left text-white uppercase bg-gray-50">
          Original URL
        </th>
        <th className="px-6 py-3 text-sm font-bold leading-4 tracking-wider text-left text-white bg-gray-50">
          Shortened URL
        </th>
        <th className="px-6 py-3 bg-gray-50"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
