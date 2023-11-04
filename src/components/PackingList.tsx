import { FC } from "react";
import { ITravelItem } from "../travel-item.model";
import Item from "./Item";

interface PackingListProps {
  items: ITravelItem[];
}

const PackingList: FC<PackingListProps> = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
