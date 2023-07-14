import React from "react";
import CustomerNav from "../navbar/CustomerNav";

const CustomerHome = () => {
  const customer= JSON.parse(localStorage.getItem("customer"))
  return (
    <div>
      <CustomerNav />
      <div className="flex justify-center mt-20 text-5xl  text-black font-bold ">
            <h2 className='border-2 p-8 bg-neutral-300'>Welcome to {customer.name}</h2>
        </div>
    </div>
  );
};

export default CustomerHome;
