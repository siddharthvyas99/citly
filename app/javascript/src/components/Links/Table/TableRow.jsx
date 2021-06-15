import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ data, handlePin, handleClick }) => {
  return (
    <tbody className="bg-white">
      {data.map(link => (
        <tr key={link.slug}>
          <td className="px-3 py-4 text-center cursor-pointer whitespace-no-wrap bg-gray-100">
            <i
              className={`transition duration-300 ease-in-out hover:text-purple-500 text-2xl ${
                link.is_pinned
                  ? "ri-pushpin-2-fill text-purple-500"
                  : "ri-pushpin-2-line text-bb-border"
              }`}
              onClick={() => handlePin(link.slug, link.is_pinned)}
            ></i>
          </td>
          <td className="px-6 py-3 text-sm break-all font-medium leading-5 max-w-xs">
            <a
              href={link.original_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.original_url}
            </a>
          </td>

          <td className="px-6 py-3 text-sm break-all font-medium leading-5 max-w-xs cursor-pointer">
            <a
              onClick={() => handleClick(link.slug)}
              target="_blank"
              className="hover:underline cursor-pointer"
              rel="noreferrer"
            >
              {link.shortened_url}
            </a>
          </td>
          <td className="px-3 py-4 text-sm text-center font-medium leading-5 whitespace-no-wrap bg-gray-100">
            {link.clicked}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

TableRow.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableRow;
