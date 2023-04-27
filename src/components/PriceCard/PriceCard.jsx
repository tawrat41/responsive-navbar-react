import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-violet-200 rounded-md p-8 flex flex-col">
      <h2 className="text-2xl font-bold text-purple-900 text-center">
        <span className="text-5xl font-extrabold text-purple-600 ">
          {price.price}
        </span>
        /month
      </h2>
      <h1 className="text-3xl font-bold text-purple-900 text-center mb-5">
        {price.name}
      </h1>
      <div className="mb-5 mx-auto">
        {price.features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="w-full mt-auto bg-green-600 py-2 rounded-md text-white font-bold hover:bg-green-900">
        Subscribe
      </button>
    </div>
  );
};

export default PriceCard;
