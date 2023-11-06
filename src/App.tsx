import React, { FC, useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { ITravelItem } from "./travel-item.model";

// const initialItems: ITravelItem[] = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

const App: FC = () => {
  const [travelItems, setTravelItems] = useState<ITravelItem[]>([]);

  function addItemHandler(
    description: ITravelItem["description"],
    quantity: ITravelItem["quantity"]
  ) {
    const newItem: ITravelItem = {
      id: travelItems.length + 1,
      description,
      quantity,
      packed: false,
    };

    setTravelItems((prev) => [...prev, newItem]);
  }

  function deleteItemHandler(id: ITravelItem["id"]) {
    const newItemList = travelItems.filter((item) => item.id !== id);
    setTravelItems([...newItemList]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItemHandler} />
      <PackingList items={travelItems} onDeleteItem={deleteItemHandler} />
      <Stats />
    </div>
  );
};

export default App;
