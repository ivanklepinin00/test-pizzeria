import React from "react";

export const PizzaList = ({ pizza, ingridients, addToOrder }) => {
  return (
    <li className="pizza-item">
      <h3 className="pizza-name">{pizza}</h3>
      <div className="pizza-ingridients">
        {Object.keys(ingridients).map((pizza) => {
          return <span key={pizza}>{`${pizza}, `}</span>;
        })}
      </div>
      <button onClick={() => addToOrder(pizza)}>+</button>
    </li>
  );
};
