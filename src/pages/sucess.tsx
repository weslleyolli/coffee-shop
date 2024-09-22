import React, { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Image from "next/image";
import 'tailwindcss/tailwind.css';
import { Timer, MapPin, CurrencyDollar } from 'phosphor-react';

import illustration from '../assets/png/Illustration.png';

export default function Sucess() {
    const [orderData, setOrderData] = useState({
        cep: '',
        street: '',
        number: '',
        complement: '',
        name: '',
        city: '',
        uf: '',
        paymentMethod: ''
    });

    useEffect(() => {
        const storedOrderData = localStorage.getItem('checkoutForm');
        if (storedOrderData) {
            setOrderData(JSON.parse(storedOrderData));
        }
    }, []);

    return (
        <div className="px-4 md:px-20 lg:px-40 h-screen w-full">
            <Header />
            <main className="py-10 lg:py-20 px-5 flex flex-col gap-10">
                <div className="flex flex-col gap-1">
                    <h1 className="text-yellowdark font-baloo font-extrabold text-2xl lg:text-4xl">Huh! confirmed order</h1>
                    <h2 className="text-baseSubtitle text-lg lg:text-xl">Now just wait for the coffee to come to you soon</h2>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-0">
                    <div className="w-full lg:w-2/5 flex flex-col gap-8 p-8 md:p-10 border border-purpleMedium rounded-md rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]">
                        <div className="flex gap-3 items-center">
                            <div className="h-8 w-8 flex items-center justify-center bg-purpleMedium rounded-full">
                                <MapPin size={16} color="#ffffff" weight="fill" />
                            </div>
                            <div className="flex flex-col text-baseText">
                                <span>Delivery at <strong className="font-bold">{`${orderData.street}, ${orderData.number}`}</strong></span>
                                <span>{`${orderData.name} - ${orderData.city}, ${orderData.uf}`}</span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="h-8 w-8 flex items-center justify-center bg-yellowmedium rounded-full">
                                <Timer size={16} color="#ffffff" weight="fill" />
                            </div>
                            <div className="flex flex-col text-baseText">
                                <span>Delivery forecast</span>
                                <span><strong>20 min - 30 min </strong></span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="h-8 w-8 flex items-center justify-center bg-yellowdark rounded-full">
                                <CurrencyDollar size={16} color="#ffffff" weight="regular" />
                            </div>

                            <div className="flex flex-col text-baseText">
                                <span>Payment on delivery</span>
                                <span><strong>{orderData.paymentMethod}</strong></span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto lg:mr-10">
                        <Image src={illustration} alt="Order Success Illustration" className="w-full lg:w-auto"/>
                    </div>
                </div>
            </main>
        </div>
    );
}
