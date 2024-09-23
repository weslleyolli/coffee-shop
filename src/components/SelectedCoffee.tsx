import React, { useEffect, useState } from 'react';
import { coffeeData } from '../app/dataCoffee';
import Summary from './Summary';
import ProductCart from './ProductCart';
import CoffeImage from '../assets/png/Coffee.png';
import { useRouter } from 'next/router';

interface CoffeeSelection {
  [key: string]: number;
}

interface SelectedCoffeeProps {
  formData: {
    cep: string;
    street: string;
    number: string;
    complement: string;
    name: string;
    city: string;
    uf: string;
    paymentMethod: string;
  };
}

export function SelectedCoffee({ formData }: SelectedCoffeeProps) {
  const [selectedCoffees, setSelectedCoffees] = useState<CoffeeSelection>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const router = useRouter();

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

  const handleConfirmOrder = () => {
    const { cep, street, number, name, city, uf, paymentMethod } = formData;
    console.log("FormData:", formData);
    if (!cep || !street || !number || !name || !city || !uf || !paymentMethod) {
        alert('Please fill out all fields and select a payment method.');
        return;
    }
    console.log("All fields are filled. Proceeding with order confirmation...");

    localStorage.setItem('checkoutForm', JSON.stringify(formData));
    localStorage.removeItem('selectedCoffees');
    router.push('/sucess');
  };

  return (
    <aside className="flex flex-col gap-[15px] w-full md:w-[36%]">
      <h1 className="font-baloo font-bold text-lg text-baseSubtitle">Selected coffees</h1>
      <div className="bg-baseCard p-10 flex flex-col rounded-md rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]">
        {Object.entries(selectedCoffees).map(([name, qty], index) => {
          const coffee = coffeeData.find((coffee) => coffee.name === name);
          return (
            <div key={index}>
              <ProductCart
                image={coffee?.image ?? CoffeImage}
                title={name}
                value={coffee?.price ?? 0}
                quantity={qty}
                handleAmountChange={(newAmount) => {
                  console.log("Nova quantidade:", newAmount);
                }}
              />
              <div className="bg-baseButton h-[1px] w-full my-6"></div>
            </div>
          );
        })}
        <Summary totalPrice={totalPrice} />
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold uppercase px-4 py-3 mt-3 rounded-md transition-colors duration-300"
          onClick={handleConfirmOrder}
        >
          Confirm your order
        </button>
      </div>
    </aside>
  );
}
