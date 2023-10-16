import { useState } from "react";
import { Item } from "../types/types";
import ListItem from "./ListItem";

interface itemsList {
  items: Item[];
  onDeleteItem: (id: number) => void;
  onToggleCheckBox: (id: number) => void;
}

function List({ items, onDeleteItem, onToggleCheckBox }: itemsList) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems: Item[] = [];

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "alphabetically") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.itemName.localeCompare(b.itemName));
  }
  if (sortBy === "packingStatus") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item: Item) => (
          <ListItem
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleCheckBox={onToggleCheckBox}
          ></ListItem>
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setSortBy(event.target.value);
          }}
        >
          <option value={"input"}>Sort by Input order</option>
          <option value={"alphabetically"}>Sort Alphabetically</option>
          <option value={"packingStatus"}>Sort by Packed Status</option>
        </select>
        <button
          onClick={() => {
            console.log("HEY");
            sortedItems.length = 0;
          }}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}

export default List;
