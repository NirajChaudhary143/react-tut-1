import React, { useState } from "react";
interface ListGroupProps {
  listItem: string[];
  heading: string;
}
export default function ListGroup({ listItem, heading }: ListGroupProps) {
  var [SelectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <ul className="list-group m-3">
        {listItem.map((item, index) => (
          <li
            className={
              SelectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
