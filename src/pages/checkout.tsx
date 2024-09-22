import '../app/globals.css'
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import AddressForm from '@/components/AddressForm';
import PaymentForm from '@/components/PaymentForm';
import { SelectedCoffee } from '@/components/SelectedCoffee';
import { coffeeData } from '@/app/dataCoffee';

export default function Checkout() {
    const [selectedCoffees, setSelectedCoffees] = useState<{ [key: string]: number }>({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [formData, setFormData] = useState({
        cep: '',
        street: '',
        number: '',
        complement: '',
        name: '',
        city: '',
        uf: '',
        paymentMethod: ''
    });
    const router = useRouter();

    useEffect(() => {
        const coffeesString = localStorage.getItem('selectedCoffees');
        const coffees = coffeesString ? JSON.parse(coffeesString) : {};
        setSelectedCoffees(coffees);
        calculateTotalPrice(coffees);
    }, []);

    const calculateTotalPrice = (coffees: { [key: string]: number }) => {
        let total = Object.entries(coffees).reduce((acc, [name, qty]) => {
            const coffee = coffeeData.find(coffee => coffee.name === name);
            return acc + (coffee ? coffee.price * qty : 0);
        }, 0);
        setTotalPrice(parseFloat(total.toFixed(2)));
    };

    return (
        <main className="mb-5 px-4 md:px-40 h-full w-full">
            <Header />
            <section className="flex flex-col md:flex-row w-full pt-10 gap-8">
                <div className="flex flex-col w-full md:w-3/5 gap-6">
                    <h1 className="font-baloo font-bold text-lg text-baseSubtitle">Complete your order</h1>

                    {/* Passando setFormData junto com formData */}
                    <AddressForm formData={formData} setFormData={setFormData} />
                    <PaymentForm formData={formData} setFormData={setFormData} />
                </div>

                {/* Certifique-se de passar formData para o SelectedCoffee */}
                <SelectedCoffee formData={formData} />
            </section>
        </main>
    );
}
