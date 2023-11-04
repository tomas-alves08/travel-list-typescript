import { FC } from "react";

const Stats: FC = () => {
  return (
    <footer className="stats">
      <em>
        💼 You have X items on your list, and you have already packed Y (Z%)
      </em>
    </footer>
  );
};

export default Stats;
