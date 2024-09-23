'use client'
import Image from "next/image"
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'
import introImage from '../assets/png/introImage.png'

export default function Intro() {
    return (
        <section className="h-auto lg:h-[544px] flex flex-col lg:flex-row items-center justify-between p-4 lg:p-0">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-baloo text-baseTitle text-center lg:text-left">
                        Find the perfect coffee <br /> for any time of day.
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-baseSubtitle text-center lg:text-left">
                        With Coffee Delivery you get your coffee wherever you are, anytime.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row mt-8 lg:mt-16 gap-8 lg:gap-12">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <article className="h-8 w-8 flex items-center justify-center bg-yellowdark rounded-full">
                                <ShoppingCart size={16} color="#ffffff" weight="fill" />
                            </article>
                            <span className="text-sm sm:text-base">Simple and secure purchase</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <article className="h-8 w-8 flex items-center justify-center bg-yellowmedium rounded-full">
                                <Timer size={16} color="#ffffff" weight="fill" />
                            </article>
                            <span className="text-sm sm:text-base">Fast and tracked delivery</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <article className="h-8 w-8 flex items-center justify-center bg-baseText rounded-full">
                                <Package size={16} color="#ffffff" weight="fill" />
                            </article>
                            <span className="text-sm sm:text-base">Packaging keeps the coffee intact</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <article className="h-8 w-8 flex items-center justify-center bg-purpleMedium rounded-full">
                                <Coffee size={16} color="#ffffff" weight="fill" />
                            </article>
                            <span className="text-sm sm:text-base">Coffee arrives fresh to you</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 lg:mt-0 w-full lg:w-1/2 flex justify-center">
                <Image src={introImage} alt="Coffee Image" className="max-w-full h-auto" />
            </div>
        </section>
    )
}