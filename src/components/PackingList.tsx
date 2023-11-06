import { FC, useState } from "react";
import { ITravelItem } from "../travel-item.model";
import Item from "./Item";

interface PackingListProps {
  items: ITravelItem[];
  onDeleteItem: (id: ITravelItem["id"]) => void;
  onPackItem: (id: ITravelItem["id"]) => void;
  onClearList: () => void;
}

const PackingList: FC<PackingListProps> = ({
  items,
  onDeleteItem,
  onPackItem,
  onClearList,
}) => {
  const [sortBy, setSortBy] = useState("description");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function sortHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.currentTarget.value);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onPackItem={onPackItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={sortHandler}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
