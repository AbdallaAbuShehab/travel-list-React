import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItem] = useState([]);

  function handlerAddItems(newItem) {
    setItem((items) => [...items, newItem]);
  }

  function handlerDeleteItem(id) {
    setItem((item) => item.filter((i) => i.id !== id));
  }

  function handlerTogglerItem(id) {
    setItem((item) =>
      item.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  }

  function handlerClearItems() {
    setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddHandler={handlerAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handlerDeleteItem}
        onTogglerItem={handlerTogglerItem}
        onClearItem={handlerClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
