import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-5xl text-center text-purple-950 bg-purple-400 py-3 font-bold">Awesome Prackage Lists</h1>
      <div className="grid md:grid-cols-3 gap-3 py-3">
      {
        prices.map(price => <PriceCard
            key={price.id}
            price = {price}
        ></PriceCard>)
      }
      </div>
    </div>
  );
};

export default PriceList;


