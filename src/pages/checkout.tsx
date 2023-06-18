import Header from "@/components/Header";
import 'tailwindcss/tailwind.css';

import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Minus, Plus, Trash } from 'phosphor-react'
import CoffeTraditional from '../assets/png/Coffee.png'
import Image from "next/image";

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
                                <input className="p-3 bg-baseButton rounded h-11 text-center placeholder:text-sm uppercase" type="text" placeholder="Credit card" />
                            </div>
                            <div className="w-1/3 relative flex items-center">
                                <Bank size={22} color="#8047F8" weight="regular" className="absolute left-6" />
                                <input className="p-3 bg-baseButton rounded h-11 text-center placeholder:text-sm uppercase" type="text" placeholder="Debit card" />
                            </div>

                            <div className="w-1/3 relative flex items-center">
                                <Money size={22} color="#8047F8" weight="regular" className="absolute left-6" />
                                <input className="p-3 bg-baseButton rounded h-11 text-center placeholder:text-sm uppercase" type="text" placeholder="Money" />
                            </div>
                        </div>
                    </div>
                </div>
                <aside className="flex flex-col gap-[15px]">
                    <h1 className="font-baloo font-bold text-lg text-baseSubtitle">
                        Selected coffees
                    </h1>
                    <div className="bg-baseCard p-10 flex flex-col gap-8 rounded-md">
                        <div className="flex ">
                            <Image src={CoffeTraditional} alt="coffee" width={64} height={64} />
                            <div>
                                <h2>Express traditional</h2>
                                <div className="flex">
                                    <div className="flex items-center bg-baseButton gap-2 p-2 rounded-md">
                                        <Minus size={14} color="#8047F8" weight="bold" className="cursor-pointer" />
                                        <span>1</span>
                                        <Plus size={14} color="#8047F8" weight="bold" className="cursor-pointer" />
                                    </div>
                                    <div>
                                        <Trash size={22} color="#8047F8" weight="regular" />
                                        <span>
                                            Remove
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h1>$ 9,90</h1>
                        </div>
                        <div>

                            <div>
                                <span></span>
                                <div></div>
                            </div>
                            <h1></h1>
                        </div>
                        <div>

                        </div>
                    </div>
                </aside>
            </section>
        </main>

    )
}