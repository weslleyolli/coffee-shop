import Header from "@/components/Header";
import 'tailwindcss/tailwind.css';

import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Minus, Plus, Trash } from 'phosphor-react'
import CoffeTraditional from '../assets/png/Coffee.png'
import CoffeImage5 from '../assets/png/Coffee5.png'
import Image from "next/image";
import ProductCart from "@/components/ProductCart";

export default function Checkout() {
    return (
        <main className="px-40 h-screen w-full">
            <Header />
            <section className="flex w-full pt-10 gap-8">
                <div className="flex flex-col w-3/5 gap-[15px]">
                    <h1 className="font-baloo font-bold text-lg text-baseSubtitle">
                        Complete your order
                    </h1>
                    <div className="bg-baseCard p-10 flex flex-col gap-8 rounded-md">
                        <article>
                            <div className="flex gap-2">
                                <MapPinLine size={22} color="#C47F17" weight="regular" />
                                <div>
                                    <h2 className="text-base text-baseSubtitle">Delivery address</h2>
                                    <span className="text-sm text-baseText">Enter the address where you want to receive your order</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col gap-4">
                            <input className="p-3 bg-baseButton rounded h-11 w-1/3 placeholder:text-sm" type="text" placeholder="CEP" />
                            <input className="p-3 bg-baseButton rounded h-11 w-full placeholder:text-sm" type="text" placeholder="Street" />
                            <div className="flex gap-4">
                                <input className="p-3 bg-baseButton rounded h-11 w-1/3 placeholder:text-sm" type="text" placeholder="Number" />
                                <input className="p-3 bg-baseButton rounded h-11 w-2/3 placeholder:text-sm" type="text" placeholder="Complement" />
                            </div>
                            <div className="flex gap-4">
                                <input className="p-3 bg-baseButton rounded h-11 w-1/3 placeholder:text-sm" type="text" placeholder="Neighborhood" />
                                <input className="p-3 bg-baseButton rounded h-11 w-1/2 placeholder:text-sm" type="text" placeholder="City" />
                                <input className="p-3 bg-baseButton rounded h-11 w-[15%] placeholder:text-sm" type="text" placeholder="UF" />
                            </div>
                        </article>
                    </div>
                    <div className="bg-baseCard p-10 flex flex-col gap-8 rounded-md">
                        <div className="flex gap-2">
                            <CurrencyDollar size={22} color="#8047F8" weight="regular" />
                            <div>
                                <h2 className="text-base text-baseSubtitle">Payment</h2>
                                <span className="text-sm text-baseText">Payment is made on delivery. Choose the way you want to pay</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/3 relative flex items-center">
                                <CreditCard size={22} color="#8047F8" weight="regular" className="absolute left-6" />
                                <input className="p-3 bg-baseButton rounded h-11 text-center placeholder:text-sm uppercase focus:bg-purplelight focus:outline-purpleMedium" type="text" placeholder="Credit card" />
                            </div>
                            <div className="w-1/3 relative flex items-center">
                                <Bank size={22} color="#8047F8" weight="regular" className="absolute left-6" />
                                <input className="p-3 bg-baseButton rounded h-11 text-center placeholder:text-sm uppercase focus:bg-purplelight focus:outline-purpleMedium" type="text" placeholder="Debit card" />
                            </div>

                            <div className="w-1/3 relative flex items-center">
                                <Money size={22} color="#8047F8" weight="regular" className="absolute left-6" />
                                <input className="p-3 bg-baseButton rounded h-11 text-center placeholder:text-sm uppercase focus:bg-purplelight focus:outline-purpleMedium" type="text" placeholder="Money" />
                            </div>
                        </div>
                    </div>
                </div>
                <aside className="flex flex-col gap-[15px] w-[36%]">
                    <h1 className="font-baloo font-bold text-lg text-baseSubtitle">
                        Selected coffees
                    </h1>
                    <div className="bg-baseCard p-10 flex flex-col rounded-md rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]">
                        <ProductCart image={CoffeTraditional} title="Express traditional" value={9.90} />
                        <div className="bg-baseButton h-[1px] w-full my-6"></div>
                        <ProductCart image={CoffeImage5} title="Latte" value={19.90} />
                        <div className="bg-baseButton h-[1px] w-full my-6"></div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-baseText text-sm">Total items</span>
                                    <span className="text-baseText text-base font-bold">$ 29.7</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-baseText text-sm">Delivery</span>
                                    <span className="text-baseText text-base font-bold">$ 3.50</span>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-baseSubtitle text-xl font-bold">Total</h1>
                                    <h1 className="text-baseSubtitle text-xl font-bold">$ 33.2</h1>
                                </div>
                            </div>
                            <div>
                                <button className="bg-yellowmedium text-white text-sm font-bold uppercase w-full px-2 py-3 rounded-md">Confirm your order</button>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>
        </main>

    )
}