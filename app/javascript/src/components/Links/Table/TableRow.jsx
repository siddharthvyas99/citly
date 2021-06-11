import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ data, handlePin }) => {
  return (
    <tbody className="bg-white divide-y divide-bb-gray-600">
      {data.map(link => (
        <tr key={link.slug}>
          <td className="px-3 py-4 text-center cursor-pointer whitespace-no-wrap bg-gray-100">
            <i
              className={`transition duration-300 ease-in-out hover:text-purple-500 text-bb-border text-2xl ${
                link.is_pinned
                  ? "ri-pushpin-2-fill text-purple-500"
                  : "ri-pushpin-2-line"
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
              href={link.shortened_url}
              target="_blank"
              rel="noopener noreferrer"
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
  links: PropTypes.array.isRequired,
};

export default TableRow;
