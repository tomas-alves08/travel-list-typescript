import React, { FC, useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { ITravelItem } from "./travel-item.model";

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
    setTravelItems((items) => items.filter((item) => item.id !== id));
  }

  function packItemHandler(id: ITravelItem["id"]) {
    setTravelItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearListHandler() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setTravelItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItemHandler} />
      <PackingList
        items={travelItems}
        onDeleteItem={deleteItemHandler}
        onPackItem={packItemHandler}
        onClearList={clearListHandler}
      />
      <Stats items={travelItems} />
    </div>
  );
};

export default App;
