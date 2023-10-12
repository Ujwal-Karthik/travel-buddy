import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import List from "./List";
import Stats from "./Stats";
import { Item } from "../types/types";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (item: Item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleCheckBox = (id: number) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleCheckBox={handleToggleCheckBox}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
