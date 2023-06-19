import Image from "next/image"
import CoffeTraditional from '../assets/png/Coffee.png'
import {Minus, Plus, Trash } from 'phosphor-react'

interface CartProps {
    image: string;
    title: string;
    value: number;
}

export default function ProductCart({image, title, value}: CartProps) {
    return (
        <div className="flex justify-between">
            <div className="flex gap-8">
                <Image src={image} alt="coffee" width={64} height={64} />
                <div className="flex flex-col gap-2">
                    <h2 className="text-baseSubtitle text-base font-bold">{title}</h2>
                    <div className="flex gap-2">
                        <div className="flex items-center bg-baseButton gap-4 p-2 rounded-md">
                            <Minus size={14} color="#8047F8" weight="bold" className="cursor-pointer" />
                            <span>1</span>
                            <Plus size={14} color="#8047F8" weight="bold" className="cursor-pointer" />
                        </div>
                        <button className="flex items-center bg-baseButton gap-2 p-2 rounded-md">
                            <Trash size={22} color="#8047F8" weight="regular" />
                            <span>
                                Remove
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <h1 className="font-extrabold text-base text-baseText">$ {value}</h1>
        </div>
    )
}