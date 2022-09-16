import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App1() {
  const [getValue, setValue] = useState("");
  const KlikButton = () => {
    setValue("Value baru");
  };

  const [getNama, setNama] = useState("");
  const GantiNama = () => {
    setNama(prompt("Masukan nama"));
  };

  return (
    <div>
      <Navbar newValue={getValue} />
      <h1>Welcome {getNama}</h1>
      <button onClick={() => KlikButton()}>Ganti navbar</button>
      <button onClick={() => GantiNama()}>Ganti nama</button>
    </div>
  );
}

export default App1;
