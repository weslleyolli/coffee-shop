'use client'
import Coffee from "@/components/Coffee";
import Header from "@/components/Header";
import Intro from "@/components/Intro";

import CoffeImage from '../assets/png/Coffee.png'
import CoffeImage1 from '../assets/png/Coffee1.png'
import CoffeImage2 from '../assets/png/Coffee2.png'
import CoffeImage3 from '../assets/png/Coffee3.png'
import CoffeImage4 from '../assets/png/Coffee4.png'
import CoffeImage5 from '../assets/png/Coffee5.png'
import CoffeImage6 from '../assets/png/Coffee6.png'
import CoffeImage7 from '../assets/png/Coffee7.png'
import CoffeImage8 from '../assets/png/Coffee8.png'
import CoffeImage9 from '../assets/png/Coffee9.png'
import CoffeImage10 from '../assets/png/Coffee10.png'
import CoffeImage11 from '../assets/png/Coffee11.png'
import CoffeImage12 from '../assets/png/Coffee12.png'
import CoffeImage13 from '../assets/png/Coffee13.png'
import { useState } from "react";


export default function Home() {
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAmountChange = (amount: number) => {
    setTotalAmount(totalAmount + amount);
  };

  return (
    <div className="mx-40">
      <div className="relative">
        <Header />
        <div className=" absolute right-5 top-6 bg-yellowdark h-6 w-6 rounded-full flex items-center justify-center text-white">{totalAmount}</div>
      </div>
      <Intro />
      <div className="mb-10 flex flex-col gap-14">
        <h1 className="text-5xl font-extrabold font-baloo text-baseTitle">Our coffee</h1>
        <div className="flex gap-24 flex-wrap">
          <Coffee
            image={CoffeImage}
            name={'Express traditional'}
            content={'Traditional coffee made with hot water and ground beans'}
            props1={'Traditional'}
            props2={''}
            props3={''}
            handleAmountChange={handleAmountChange}
          />
          <Coffee
            image={CoffeImage1}
            name={'American Express'}
            content={'Diluted express, less intense than the traditional one'}
            props1={'Traditional'}
            props2={''}
            props3={''}
            handleAmountChange={handleAmountChange}
          />
          <Coffee
            image={CoffeImage2}
            name={'creamy express'}
            content={'Traditional express with creamy foam'}
            props1={'Traditional'}
            props2={''}
            props3={''}
            handleAmountChange={handleAmountChange}
          />
          <Coffee
            image={CoffeImage3}
            name={'Iced Express'}
            content={'Drink prepared with express coffee and ice cubes'}
            props1={'Traditional'}
            props2={'Iced'}
            props3={''}
            isActive={true}
            handleAmountChange={handleAmountChange}
          />
          <Coffee
            image={CoffeImage4}
            name={'Coffee with milk'}
            content={'Half and half traditional express with steamed milk'}
            props1={'Traditional'}
            props2={'With milk'}
            props3={''}
            isActive={true}
            handleAmountChange={handleAmountChange}
          />
          <Coffee
            image={CoffeImage5}
            name={'Latte'}
            content={'A shot of express with twice as much milk and creamy foam'}
            props1={'Traditional'}
            props2={'With milk'}
            props3={''}
            isActive={true}
            handleAmountChange={handleAmountChange}
          />
          <Coffee
            image={CoffeImage6}
            name={'Capuccino'}
            content={'Cinnamon drink made from equal doses of coffee, milk and foam'}
            props1={'Traditional'}
            props2={'With milk'}
            props3={''}
            isActive={true}
            handleAmountChange={handleAmountChange}
          />
          <Coffee
            image={CoffeImage7}
            name={'Macchiato'}
            content={'Express coffee mixed with a little hot milk and foam'}
            props1={'Traditional'}
            props2={'with milk'}
            props3={''}
            isActive={true}
            handleAmountChange={handleAmountChange}
          />
          <Coffee
            image={CoffeImage8}
            name={'Mocaccino'}
            content={'Express coffee with chocolate sauce, a little milk and foam'}
            props1={'Traditional'}
            props2={'with milk'}
            props3={''}
            isActive={true}
            handleAmountChange={handleAmountChange}
          />
          <Coffee
            image={CoffeImage9}
            name={'Hot chocolate'}
            content={'Drink made with chocolate dissolved in hot milk and coffee'}
            props1={'Special'}
            props2={'with milk'}
            props3={''}
            isActive={true}
            handleAmountChange={handleAmountChange}
          />
          <Coffee
            image={CoffeImage10}
            name={'Cuban'}
            content={'Iced express drink with rum, cream and mint'}
            props1={'Special'}
            props2={'Alcoholic'}
            props3={'Iced'}
            isActive={true}
            handleAmountChange={handleAmountChange}
          />
          <Coffee
            image={CoffeImage11}
            name={'Hawaiian'}
            content={'Sweet drink prepared with coffee and coconut milk'}
            props1={'Special'}
            props2={''}
            props3={''}
            handleAmountChange={handleAmountChange}
          />
          <Coffee
            image={CoffeImage12}
            name={'Arabic'}
            content={'Drink prepared with Arabic coffee beans and spices'}
            props1={'Special'}
            props2={''}
            props3={''}
            handleAmountChange={handleAmountChange}
          />
          <Coffee
            image={CoffeImage13}
            name={'Irish'}
            content={'Drink based on coffee, Irish whiskey, sugar and whipped cream'}
            props1={'Special'}
            props2={'Alcoholic'}
            props3={''}
            isActive={true}
            handleAmountChange={handleAmountChange}
          />

        </div>

      </div>
    </div>
  )
}
