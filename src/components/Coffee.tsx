import Image, { StaticImageData } from "next/image";
import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState, useEffect } from "react";

interface CoffeeProps {
    image: StaticImageData;
    name: string; 
    content: string;
    price: number;
    props1: string;
    props2?: string;
    props3?: string;
    isActive: boolean;
    handleAmountChange: HandleAmountChange;
}

type HandleAmountChange = (amount: number, name: string, newAmount: number) => void;

export default function Coffee({ image, name, content, price, props1, props2, props3, isActive, handleAmountChange }: CoffeeProps) {
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const coffeesString = localStorage.getItem('selectedCoffees');
        const coffees = coffeesString ? JSON.parse(coffeesString) : {};
        if (coffees[name]) {
            setAmount(coffees[name]);
        }
    }, [name]);

    const increment = () => {
        setAmount(prevAmount => prevAmount + 1);
    };

    const decrease = () => {
        setAmount(prevAmount => (prevAmount > 0 ? prevAmount - 1 : 0));
    };

    const addToCart = () => {
        handleAmountChange(amount, name, amount);
        updateLocalStorage(amount);
        setAmount(0);
    };

    const updateLocalStorage = (newAmount: number) => {
        let coffeesString = localStorage.getItem('selectedCoffees');
        let coffees = coffeesString ? JSON.parse(coffeesString) : {};
        coffees[name] = newAmount;
        localStorage.setItem('selectedCoffees', JSON.stringify(coffees));
    };

    return (
        <div className="bg-baseCard w-[18%] flex flex-col items-center justify-between px-8 rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]">
            <div className="flex flex-col items-center gap-5">
                <Image className="mt-[-1.5rem]" src={image} alt="Coffee" />
                <div className="flex items-center gap-2">
                    <h2 className="bg-yellowlight text-yellowdark text-[10px] font-bold rounded-2xl py-1 px-3 text-center uppercase">{props1}</h2>
                    {props2 && (
                        <h2 className={`bg-yellowlight text-yellowdark text-[10px] font-bold rounded-2xl text-center uppercase ${isActive ? 'py-1 px-3' : ''}`}>{props2}</h2>
                    )}
                    {props3 && (
                        <h2 className="bg-yellowlight text-yellowdark text-[10px] font-bold rounded-2xl py-1 px-3 uppercase">{props3}</h2>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <h1 className="font-baloo text-baseSubtitle text-lg text-center">{name}</h1>
                <span className="text-baseLabel text-sm text-center">{content}</span>
            </div>
            <div className="flex w-full items-center mr-8 justify-between mb-5 gap-2">
                <article className="flex items-center gap-1">
                    <span className="text-sm text-baseText">R$</span>
                    <h1 className="font-baloo font-extrabold text-xl text-baseText whitespace-nowrap">{price.toFixed(2)}</h1>
                </article>
                <div className="flex items-center gap-2 w-full">
                    <div className="flex items-center bg-baseButton gap-2 p-2 rounded-md">
                        <Minus size={14} color="#8047F8" weight="bold" className="cursor-pointer" onClick={decrease} />
                        <span>{amount}</span>
                        <Plus size={14} color="#8047F8" weight="bold" className="cursor-pointer" onClick={increment} />
                    </div>
                    <button className="bg-purpledark flex items-center p-2 rounded-md ml-auto" onClick={addToCart}>
                        <ShoppingCart size={20} color="#ffffff" weight="fill" />
                    </button>
                </div>
            </div>
        </div>
    );
}
