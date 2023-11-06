import { FC } from "react";
import { ITravelItem } from "../travel-item.model";

interface StatsProps {
  items: ITravelItem[];
}

const Stats: FC<StatsProps> = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </p>
    );

  const numOfItems: number = items.length;
  const numOfPackedItems: number = items.filter(
    (item) => item.packed === true
  ).length;
  const percentageOfPackedItems: number =
    Math.round((numOfPackedItems / numOfItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        💼
        {percentageOfPackedItems === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numOfItems} items on your list, and you have already packed ${numOfPackedItems} (${percentageOfPackedItems}%)`}
      </em>
    </footer>
  );
};

export default Stats;
