import { FC, useState } from "react";
import { ITravelItem } from "../travel-item.model";

interface FormProps {
  addItem: (description: string, quantity: number) => void;
}

const Form: FC<FormProps> = ({ addItem }) => {
  const [description, setDescription] =
    useState<ITravelItem["description"]>("");
  const [quantity, setQuantity] = useState<ITravelItem["quantity"]>(1);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (description === "") alert("Please enter a description value.");
    else {
      addItem(description, quantity);
      setDescription("");
      setQuantity(1);
    }
  }

  function handleQuantity(e: React.ChangeEvent<HTMLSelectElement>) {
    setQuantity(Number(e.currentTarget.value));
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={handleQuantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Item..."
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
