import React, { useEffect, useState } from 'react';
import { coffeeData } from '../app/dataCoffee';

interface CoffeeSelection {
  [key: string]: number;
}

function SelectedCoffees() {
  const [selectedCoffees, setSelectedCoffees] = useState<CoffeeSelection>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const coffeesString = localStorage.getItem('selectedCoffees');
    const coffees: CoffeeSelection = coffeesString ? JSON.parse(coffeesString) : {};
    setSelectedCoffees(coffees);

    let total = 0;
    for (const [name, qty] of Object.entries(coffees)) {
      const coffee = coffeeData.find(coffee => coffee.name === name);
      if (coffee) {
        total += coffee.price * qty;
      }
    }
    setTotalPrice(parseFloat(total.toFixed(2)));
  }, []);

  return (
    <div className="selected-coffees">
      <h2>Selected Coffees</h2>
      <ul>
        {Object.entries(selectedCoffees).map(([name, qty]) => (
          <li key={name}>
            {name}: {qty}
          </li>
        ))}
      </ul>
      <p>Total Price: R$ {totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default SelectedCoffees;
