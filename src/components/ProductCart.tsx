import Image, { StaticImageData } from 'next/image';
import { Minus, Plus, Trash } from 'phosphor-react';
import { useState } from 'react';

interface ProductCartProps {
    image: StaticImageData | string;
    title: string;
    value: number;
    quantity: number;
    handleAmountChange: (newAmount: number) => void;
}

export default function ProductCart({ image, title, value, quantity, handleAmountChange }: ProductCartProps) {
    const [amount, setAmount] = useState(quantity);

    const increment = () => {
        const newAmount = amount + 1;
        setAmount(newAmount);
        handleAmountChange(newAmount);
    };

    const decrease = () => {
        if (amount > 0) {
            const newAmount = amount - 1;
            setAmount(newAmount);
            handleAmountChange(newAmount);
        }
    };

    const removeItem = () => {
        setAmount(0);
        handleAmountChange(0);
    };

    return (
        <div className="flex justify-between items-center">
            <Image src={image} alt={title} width={64} height={64} />
            <div className="flex flex-col gap-1">
                <span className="font-bold text-base text-baseSubtitle">{title}</span>
                <span className="text-sm text-baseText">R$ {value.toFixed(2)}</span>
                <div className="flex gap-2 items-center">
                    <div className="flex items-center bg-baseButton gap-2 p-2 rounded-md">
                        <Minus size={14} color="#8047F8" weight="bold" className="cursor-pointer" onClick={decrease} />
                        <span>{amount}</span>
                        <Plus size={14} color="#8047F8" weight="bold" className="cursor-pointer" onClick={increment} />
                    </div>
                    <button className="flex items-center gap-1 text-sm text-purpledark" onClick={removeItem}>
                        <Trash size={16} color="#8047F8" />
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
