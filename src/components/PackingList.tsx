import { FC } from "react";
import { ITravelItem } from "../travel-item.model";
import Item from "./Item";

interface PackingListProps {
  items: ITravelItem[];
  onDeleteItem: (id: ITravelItem["id"]) => void;
  onPackItem: (id: ITravelItem["id"]) => void;
}

const PackingList: FC<PackingListProps> = ({
  items,
  onDeleteItem,
  onPackItem,
}) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onPackItem={onPackItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
