import { Item } from "../types/types";

interface ItemProps {
  item: Item;
  onDeleteItem: (id: number) => void;
  onToggleCheckBox: (id: number) => void;
}
const ListItem: React.FC<ItemProps> = ({
  item,
  onDeleteItem,
  onToggleCheckBox,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleCheckBox(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.itemQuantity} {item.itemName}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default ListItem;
