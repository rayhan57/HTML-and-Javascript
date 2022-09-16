import React, { useState, useEffect } from "react";
import Paragraf from "./components/Paragraf";
import { useRef } from "react";
import "./App.css";

const App2 = () => {
  const [getData, setData] = useState(1);
  const [getStatus, setStatus] = useState("");
  const linkRef = useRef(null);
  const scroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const Tambah = () => {
    setData(getData + 1);
  };

  const Kurang = () => {
    setData(getData - 1);
    if (getData <= 0) {
      setData(0);
    }
  };

  useEffect(() => {
    if (getData > 3) {
      setStatus("Banyak Duit");
    } else {
      setStatus("Kurang Duit");
    }
  }, [getData]);

  return (
    <div>
      <h1>Mobil saya ada {getData}</h1>
      <h2>Anda {getStatus}</h2>
      <button onClick={() => Tambah()} className="background">
        Tambah
      </button>
      <button onClick={() => Kurang()} className="background">
        Kurang
      </button>
      <button onClick={() => scroll(linkRef.current)} className="background">
        Scroll
      </button>
      <Paragraf />
      <Paragraf />
      <Paragraf />
      <a href="#" className="App-link" target="_blank" ref={linkRef}>
        Learn More
      </a>
      <Paragraf />
      <Paragraf />
      <Paragraf />
    </div>
  );
};

export default App2;
