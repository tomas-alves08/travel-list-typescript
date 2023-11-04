import { FC } from "react";
import { ITravelItem } from "../travel-item.model";

interface ItemProps {
  item: ITravelItem;
}

const Item: FC<ItemProps> = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
