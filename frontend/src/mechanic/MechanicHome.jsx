import React from "react";
import MechanicNav from "../navbar/MechanicNav";

const MechanicHome = () => {
  const mechanic= JSON.parse(localStorage.getItem("mechanic"))
  return (
    <div>
      <MechanicNav />

      <div className="flex justify-center mt-20 text-5xl  text-black font-bold ">
        <h2 className="border-2 p-8 bg-neutral-300">Welcome to {mechanic.name}</h2>
      </div>
    </div>
  );
};

export default MechanicHome;
