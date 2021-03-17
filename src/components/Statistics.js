import React from "react";
import { getPizzaInfo } from "../getPizzaInfo";

export const Statistics = ({ orders }) => {
  const arr = [...orders];
  const newArr = [];
  arr.map((order) => {
    for (const [key, value] of Object.entries(order)) {
      if (key !== "timestamp") {
        for (let i = 0; i < value; i++) {
          newArr.push(key);
        }
      }
    }
  });
  const { popular, ingridients } = getPizzaInfo(newArr);
  console.log(popular, ingridients);

  return (
    <>
      <div className="popular">
        <h3 className="popular-header">Самые популярные пиццы</h3>
        <div className="popular-body">
          {popular.map((pizza) => {
            return <span key={pizza}>{`${pizza}, `}</span>;
          })}
        </div>
      </div>
      <div className="ingridients">
        <h3 className="ingridients-title">Ингридиенты</h3>
        <div className="ingridients-body">
          {ingridients.map((ing) => {
            return <span key={ing}>{`${ing}, `}</span>;
          })}
        </div>
      </div>
    </>
  );
};
