import "./styles.css";
import { getPizzaInfo } from "./getPizzaInfo";
import { pizzaMenu } from "./pizzaMenu";
import { PizzaList } from "./components/PizzaList";
import { useEffect, useState } from "react";
import { Order } from "./components/Order";
import { OrdersList } from "./components/OrdersList";
import { Statistics } from "./components/Statistics";

export default function App() {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setMenu(pizzaMenu);
  }, []);

  useEffect(() => {
    orders.sort(function (a, b) {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });
  }, [orders]);

  const makeOrder = (order) => {
    if (Object.keys(order).length) {
      const obj = { ...order };
      obj["timestamp"] = new Date();
      const arr = [...orders];
      arr.push(obj);
      arr.sort(function (a, b) {
        return new Date(b.timestamp) - new Date(a.timestamp);
      });
      setOrders(arr);
      setOrder([]);
    }
  };

  const addToOrder = (key) => {
    const obj = { ...order };
    obj[key] = obj[key] + 1 || 1;
    setOrder(obj);
  };

  const deleteFromOrder = (key) => {
    const obj = { ...order };
    if (obj[key] === 1) {
      delete obj[key];
    } else obj[key] = obj[key] - 1;
    setOrder(obj);
  };

  return (
    <div className="App">
      <div className="Menu">
        <ul className="pizzas-list">
          {Object.keys(menu).map((pizza) => {
            return (
              <PizzaList
                key={pizza}
                pizza={pizza}
                ingridients={menu[pizza]}
                addToOrder={addToOrder}
              />
            );
          })}
        </ul>
      </div>
      <div className="Order">
        <Order
          order={order}
          deleteFromOrder={deleteFromOrder}
          makeOrder={makeOrder}
        />
      </div>
      <div className="Orders">
        <OrdersList orders={orders} />
      </div>
      <div className="Statistics">
        <Statistics orders={orders} />
      </div>
    </div>
  );
}
