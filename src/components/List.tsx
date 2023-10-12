import { Item } from "../types/types";
import ListItem from "./ListItem";

interface itemsList {
  items: Item[];
  onDeleteItem: (id: number) => void;
  onToggleCheckBox: (id: number) => void;
}

function List({ items, onDeleteItem, onToggleCheckBox }: itemsList) {
  return (
    <div className="list">
      <ul>
        {items.map((item: Item) => (
          <ListItem
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleCheckBox={onToggleCheckBox}
          ></ListItem>
        ))}
      </ul>
    </div>
  );
}

export default List;
