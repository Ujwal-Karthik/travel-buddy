import React from "react";

function List() {
  return (
    <div className="list">
      <ul>
        <Item></Item>
      </ul>
    </div>
  );
}

const Item = () => {
  return (
    <li>
      <span>
        name quantity
        <button>❌</button>
      </span>
    </li>
  );
};
export default List;
