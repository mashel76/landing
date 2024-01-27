import React from "react";
import NavBar from "./components/navbar";
import Konten1 from "./components/konten1";
import Konten2 from "./components/konten2";

export default function Home() {
  return (
    <main className="bg-teal-300 flex flex-col w-full h-screen p-4">
      <NavBar />
      <div className="px-4 mt-4">
        <Konten1 />
      </div>
      <div className="bg-white rounded-lg px-4 mt-4">
        <Konten2 />
      </div>
    </main>
  );
}
