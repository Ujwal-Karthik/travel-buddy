import React, { useState } from "react";

function Form() {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onItemNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  };

  const onItemQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemQuantity(() => Number(event.target.value));
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your Trip?</h3>
      <select value={itemQuantity} onChange={onItemQuantityChange}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item Required..."
        value={itemName}
        onChange={onItemNameChange}
      ></input>
      <button>Add</button>
    </form>
  );
}

export default Form;
