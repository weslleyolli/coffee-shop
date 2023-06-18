'use client'
import Image from "next/image"
import {Minus, Plus, ShoppingCart} from 'phosphor-react'

interface CoffeProps {
    image: string;
    name: string; 
    content: string;
    props1: string;
    props2: string;
    props3: string;
    isActive: boolean;
}

export default function Coffee({image, name, content, props1, props2, props3, isActive}: CoffeProps){
    const isActiveProps2 = props2 && props3;
    return (
        <div className="bg-baseCard w-[19%] flex flex-col items-center gap-5 relative px-8 rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]">
            <div className="flex flex-col items-center gap-5">
                <Image className="mt-[-1.5rem]" src={image} alt="Coffee" />
                <div className="flex items-center gap-2">
                    <h2 className="bg-yellowlight text-yellowdark text-[10px] font-bold rounded-2xl py-1 px-3 text-center uppercase">{props1}</h2>
                    <h2 className={`bg-yellowlight text-yellowdark text-[10px] font-bold rounded-2xl text-center uppercase ${isActive ? 'py-1 px-3' : ''}`}>{props2}</h2>
                    {isActiveProps2 && <h2 className="bg-yellowlight text-yellowdark text-[10px] font-bold rounded-2xl py-1 px-3 uppercase">{props3}</h2>}
                </div>
                
            </div>
            <div className="flex flex-col items-center gap-3">
                <h1 className="font-baloo text-baseSubtitle text-xl">{name}</h1>
                <span className="text-baseLabel text-sm">{content}</span>
            </div>
            <div className="flex w-full justify-between items-center mb-5">
                <article className="flex items-center gap-1">
                    <span className="text-sm text-baseText">R$</span>
                    <h1 className="font-baloo font-extrabold text-2xl text-baseText">9,90</h1>
                </article>
                <div className="flex gap-2">
                    <div className="flex items-center bg-baseButton gap-2 p-2 rounded-md">
                        <Minus size={14} color="#8047F8" weight="bold" className="cursor-pointer" />
                        <span>1</span>
                        <Plus size={14} color="#8047F8" weight="bold" className="cursor-pointer" />
                    </div>
                    <button className="bg-purpledark flex items-center p-2 rounded-md">
                        <ShoppingCart size={22} color="#ffffff" weight="fill" />
                    </button>
                </div>
            </div>
        </div>
    )
}