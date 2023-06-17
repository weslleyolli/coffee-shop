'use client'
import Image from "next/image"
import { MapPin, ShoppingCart} from 'phosphor-react'
import logoCoffe from '../assets/svgs/logoCoffee.svg'


export default function Header() {
    return (
        <div className="my-8 mx-40 flex items-center justify-between">
            <Image src={logoCoffe} alt="" />
            <div className="flex gap-3 ">
                <button className="flex gap-1 bg-purplelight p-2 rounded-md text-purpledark">
                    <MapPin size={22} color="#8047F8" weight="fill" />
                    <span>Orlando, FL</span>
                </button>
                <button className="bg-yellowlight flex items-center p-2 rounded-md">
                    <ShoppingCart size={22} color="#C47F17" weight="fill" />
                </button>
            </div>
        </div>
    )
}