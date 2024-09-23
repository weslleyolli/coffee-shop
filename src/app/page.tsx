'use client'
import React, { useState, useEffect } from 'react';
import Coffee from "@/components/Coffee";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import { coffeeData } from './dataCoffee';

export default function Home() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedCoffees, setSelectedCoffees] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const coffeesString = localStorage.getItem('selectedCoffees');
    const coffees = coffeesString ? JSON.parse(coffeesString) : {};
    setSelectedCoffees(coffees);
    updateTotalAmount(coffees);
  }, []);

  const handleAmountChange = (amount: number, name: string, newAmount: number) => {
    setTotalAmount(prevAmount => prevAmount + amount);
    setSelectedCoffees(prevCoffees => {
      const updatedCoffees = { ...prevCoffees, [name]: newAmount };
      localStorage.setItem('selectedCoffees', JSON.stringify(updatedCoffees));
      updateTotalAmount(updatedCoffees);
      return updatedCoffees;
    });
  };

  const updateTotalAmount = (coffees: { [key: string]: number }) => {
    const total = Object.values(coffees).reduce((acc, curr) => acc + curr, 0);
    setTotalAmount(total);
  };

  return (
    <div className="mx-5 lg:mx-32">
      <div className="relative">
        <Header />
        <div className="absolute right-5 top-6 bg-yellowdark h-6 w-6 rounded-full flex items-center justify-center text-white">
          {totalAmount}
        </div>
      </div>
      <Intro />
      <div className="mb-10 flex flex-col gap-10 lg:gap-14 items-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold font-baloo text-baseTitle text-center lg:text-left">
          Our coffee
        </h1>
        <div className="flex gap-6 lg:gap-12 flex-wrap">
          {coffeeData.map((coffee, index) => (
            <Coffee
              key={index}
              image={coffee.image}
              name={coffee.name}
              content={coffee.content}
              price={coffee.price}
              props1={coffee.props1}
              props2={coffee.props2}
              props3={coffee.props3}
              isActive={coffee.isActive}
              handleAmountChange={handleAmountChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
