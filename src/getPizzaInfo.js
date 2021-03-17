import { pizzaMenu } from "./pizzaMenu";
export const getPizzaInfo = (lastPizzas) => {
  let popular = [],
    ingridients = {},
    pizzaCount = {}, // кол-во разных пицц чтоб определить популярность
    NUM = 5; // кол-во популярных пиц
  for (const i of lastPizzas) {
    // создаем массив пар ключ значение где ключ - название пиццы, значение - его количество в исходном
    if (pizzaCount.hasOwnProperty(i)) {
      pizzaCount[i] += 1;
    } else {
      pizzaCount[i] = 1;
    }
  }
  // сортируем pizzaCount
  pizzaCount = Object.keys(pizzaCount).sort(function (a, b) {
    return pizzaCount[b] - pizzaCount[a];
  });
  // добавляем самые популярные пиццы в массив popular
  for (let i = 0; i < NUM; i++) {
    if (pizzaCount[i]) popular.push(pizzaCount[i]);
  }

  // создание Ingredients, сначала группируем их в один обьект, далее сортируем
  for (const pizza of lastPizzas) {
    for (const [key, value] of Object.entries(pizzaMenu[pizza])) {
      if (ingridients.hasOwnProperty(key)) {
        ingridients[key] += value;
      } else ingridients[key] = value;
    }
  }

  ingridients = Object.keys(ingridients).sort(function (a, b) {
    return ingridients[b] - ingridients[a];
  });

  return {
    popular: [...popular], // масив повинен включати 5 найпопулярніших піц
    ingridients: [...ingridients] // масив, який містить назви інгрідієнтів
    // по популярності
  };
};
