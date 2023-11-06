import { FC } from "react";
import { ITravelItem } from "../travel-item.model";

interface ItemProps {
  item: ITravelItem;
  onDeleteItem: (id: ITravelItem["id"]) => void;
}

const Item: FC<ItemProps> = ({ item, onDeleteItem }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
