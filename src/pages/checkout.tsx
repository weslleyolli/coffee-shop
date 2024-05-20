import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import 'tailwindcss/tailwind.css';
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';
import { useRouter } from 'next/router';
import ProductCart from "@/components/ProductCart";
import { coffeeData } from '../app/dataCoffee';
import CoffeImage from '../assets/png/Coffee.png'; // Imagem padrão

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

    const handleAmountChange = (name: string, newAmount: number) => {
        setSelectedCoffees(prevCoffees => {
            const updatedCoffees = { ...prevCoffees, [name]: newAmount };
            if (newAmount === 0) {
                delete updatedCoffees[name];
            }
            localStorage.setItem('selectedCoffees', JSON.stringify(updatedCoffees));
            calculateTotalPrice(updatedCoffees);
            return updatedCoffees;
        });
    };

    const resetFormData = () => {
        setFormData({
            cep: '',
            street: '',
            number: '',
            complement: '',
            name: '',
            city: '',
            uf: '',
            paymentMethod: ''
        });
    };

    const handleConfirmOrder = () => {
        if (Object.values(formData).some(value => value === '')) {
            alert('Please fill out all fields and select a payment method.');
            return;
        }

        localStorage.setItem('checkoutForm', JSON.stringify(formData));
        localStorage.removeItem('selectedCoffees');
        resetFormData();
        router.push('/sucess');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePaymentMethodChange = (method: string) => {
        setFormData(prevState => ({
            ...prevState,
            paymentMethod: method
        }));
    };

    return (
        <main className="px-40 h-screen w-full">
            <Header />
            <section className="flex w-full pt-10 gap-8">
                <div className="flex flex-col w-3/5 gap-[15px]">
                    <h1 className="font-baloo font-bold text-lg text-baseSubtitle">Complete your order</h1>
                    <AddressForm formData={formData} handleInputChange={handleInputChange} />
                    <PaymentForm formData={formData} handlePaymentMethodChange={handlePaymentMethodChange} />
                </div>
                <aside className="flex flex-col gap-[15px] w-[36%]">
                    <h1 className="font-baloo font-bold text-lg text-baseSubtitle">Selected coffees</h1>
                    <div className="bg-baseCard p-10 flex flex-col rounded-md rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]">
                        {Object.entries(selectedCoffees).map(([name, qty], index) => {
                            const coffee = coffeeData.find(coffee => coffee.name === name);
                            return (
                                <div key={index}>
                                    <ProductCart
                                        image={coffee?.image ?? CoffeImage} // Valor padrão para imagem
                                        title={name}
                                        value={coffee?.price ?? 0} // Valor padrão para preço
                                        quantity={qty}
                                        handleAmountChange={(newAmount) => handleAmountChange(name, newAmount)}
                                    />
                                    <div className="bg-baseButton h-[1px] w-full my-6"></div>
                                </div>
                            );
                        })}
                        <Summary totalPrice={totalPrice} />
                        <button
                            className="bg-yellowmedium text-white text-sm font-bold uppercase w-full px-2 py-3 mt-3 rounded-md"
                            onClick={handleConfirmOrder}
                        >
                            Confirm your order
                        </button>
                    </div>
                </aside>
            </section>
        </main>
    );
}

interface AddressFormProps {
    formData: {
        cep: string;
        street: string;
        number: string;
        complement: string;
        name: string;
        city: string;
        uf: string;
    };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ formData, handleInputChange }) => (
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
            <input
                className="p-3 bg-baseButton rounded h-11 w-1/3 placeholder:text-sm"
                type="text"
                placeholder="CEP"
                name="cep"
                value={formData.cep}
                onChange={handleInputChange}
            />
            <input
                className="p-3 bg-baseButton rounded h-11 w-full placeholder:text-sm"
                type="text"
                placeholder="Street"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
            />
            <div className="flex gap-4">
                <input
                    className="p-3 bg-baseButton rounded h-11 w-1/3 placeholder:text-sm"
                    type="text"
                    placeholder="Number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                />
                <input
                    className="p-3 bg-baseButton rounded h-11 w-2/3 placeholder:text-sm"
                    type="text"
                    placeholder="Complement"
                    name="complement"
                    value={formData.complement}
                    onChange={handleInputChange}
                />
            </div>
            <div className="flex gap-4">
                <input
                    className="p-3 bg-baseButton rounded h-11 w-1/3 placeholder:text-sm"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <input
                    className="p-3 bg-baseButton rounded h-11 w-1/2 placeholder:text-sm"
                    type="text"
                    placeholder="City"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                />
                <input
                    className="p-3 bg-baseButton rounded h-11 w-[15%] placeholder:text-sm"
                    type="text"
                    placeholder="UF"
                    name="uf"
                    value={formData.uf}
                    onChange={handleInputChange}
                />
            </div>
        </article>
    </div>
);

interface PaymentFormProps {
    formData: {
        paymentMethod: string;
    };
    handlePaymentMethodChange: (method: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ formData, handlePaymentMethodChange }) => (
    <div className="bg-baseCard p-10 flex flex-col gap-8 rounded-md">
        <div className="flex gap-2">
            <CurrencyDollar size={22} color="#8047F8" weight="regular" />
            <div>
                <h2 className="text-base text-baseSubtitle">Payment</h2>
                <span className="text-sm text-baseText">Payment is made on delivery. Choose the way you want to pay</span>
            </div>
        </div>
        <div className="flex gap-4">
            <PaymentOption
                placeholder="Credit card"
                icon={<CreditCard size={22} color="#8047F8" weight="regular" />}
                onClick={() => handlePaymentMethodChange('Credit card')}
                selected={formData.paymentMethod === 'Credit card'}
            />
            <PaymentOption
                placeholder="Debit card"
                icon={<Bank size={22} color="#8047F8" weight="regular" />}
                onClick={() => handlePaymentMethodChange('Debit card')}
                selected={formData.paymentMethod === 'Debit card'}
            />
            <PaymentOption
                placeholder="Money"
                icon={<Money size={22} color="#8047F8" weight="regular" />}
                onClick={() => handlePaymentMethodChange('Money')}
                selected={formData.paymentMethod === 'Money'}
            />
        </div>
    </div>
);


interface PaymentOptionProps {
    placeholder: string;
    icon: React.ReactNode;
    onClick: () => void;
    selected: boolean;
}

const PaymentOption: React.FC<PaymentOptionProps> = ({ placeholder, icon, onClick, selected }) => (
    <button
        className={`w-1/3 relative flex items-center justify-center py-3 rounded-md cursor-pointer ${selected ? 'bg-purplelight' : 'bg-baseButton'}`}
        onClick={onClick}
    >
        {icon}
        <span className="ml-2 text-sm uppercase">{placeholder}</span>
    </button>
);

interface SummaryProps {
    totalPrice: number;
}

const Summary: React.FC<SummaryProps> = ({ totalPrice }) => (
    <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <span className="text-baseText text-sm">Total items</span>
                <span className="text-baseText text-base font-bold">R$ {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-baseText text-sm">Delivery</span>
                <span className="text-baseText text-base font-bold">R$ 3.50</span>
            </div>
            <div className="flex justify-between">
                <h1 className="text-baseSubtitle text-xl font-bold">Total</h1>
                <h1 className="text-baseSubtitle text-xl font-bold">R$ {(totalPrice + 3.50).toFixed(2)}</h1>
            </div>
        </div>
    </div>
);
