import React from "react";

export const OrdersList = ({ orders }) => {
  let arr = Object.entries(orders);
  return (
    <ul className="orders-list">
      <h3 className="orders-title">Все заказы</h3>
      {arr.map((order) => {
        return (
          <li className="order-item" key={order}>
            <h3 className="order-header">{`Заказ №${
              arr.length - order[0]
            }`}</h3>
            <div className="order-body">
              {Object.entries(order[1]).map((order) => {
                if (order[0] === "timestamp") {
                  return <span key={order}>{`дата: ${order[1]}.`} </span>;
                } else
                  return (
                    <span key={order}>{`${order[0]}: ${order[1]}шт,`} </span>
                  );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
