import React from "react";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main className="bg-slate-200 w-full h-screen flex flex-col items-center justify-between p-8">
      <NavBar />
    </main>
  );
}
