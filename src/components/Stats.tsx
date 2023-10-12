import React from "react";
import { Item } from "../types/types";

interface StatsProps {
  items: Item[];
}

function Stats({ items }: StatsProps) {
  if (!items.length) {
    return (
      <footer className="stats">
        Get started by adding some items for packing! 😊
      </footer>
    );
  }
  const itemsCount = items.length;
  const packedItemsCount = items.filter((item) => item.packed).length;
  const packingPercentage = Math.round((packedItemsCount / itemsCount) * 100);
  return (
    <footer className="stats">
      <em>
        {packingPercentage === 100
          ? `You're ready to go ✈️!`
          : ` You have Packed ${packedItemsCount} out of ${itemsCount} items...${packingPercentage}% Done!`}
      </em>
    </footer>
  );
}

export default Stats;
