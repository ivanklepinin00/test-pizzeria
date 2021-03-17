import React from "react";

export const Order = ({ order, deleteFromOrder, makeOrder }) => {
  let arr = Object.entries(order);
  return (
    <ul className="order-list">
      <h3 className="order-title">Ваш заказ</h3>
      {arr.map((pizza) => {
        return (
          <li className="order-item" key={pizza}>
            <span>
              {`${pizza[0]}: ${pizza[1]}шт`}{" "}
              <button onClick={() => deleteFromOrder(pizza[0])}>&times;</button>{" "}
            </span>
          </li>
        );
      })}
      <button onClick={() => makeOrder(order)}>Заказать</button>
    </ul>
  );
};
