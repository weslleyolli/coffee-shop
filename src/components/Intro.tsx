'use client'
import Image from "next/image"
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'
import introImage from '../assets/png/introImage.png'

export default function Intro() {
    return (
        <section className="h-[544px] flex items-center justify-between">
            <div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-extrabold font-baloo text-baseTitle">Find the perfect coffee<br /> for any time of day.</h1>
                    <p className="text-xl text-baseSubtitle">With Coffee Delivery you get your coffee wherever you are, anytime.</p>
                </div>
                <div className="flex mt-16 gap-12">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <article className="h-8 w-8 flex items-center justify-center bg-yellowdark rounded-full">
                                <ShoppingCart size={16} color="#ffffff" weight="fill" />
                            </article>
                            <span className="text-sm">Simple and secure purchase</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <article className="h-8 w-8 flex items-center justify-center bg-yellowmedium rounded-full">
                                <Timer size={16} color="#ffffff" weight="fill" />
                            </article>
                            <span className="text-sm">Fast and tracked delivery</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <article className="h-8 w-8 flex items-center justify-center bg-baseText rounded-full">
                                <Package size={16} color="#ffffff" weight="fill" />
                            </article>
                            <span className="text-sm">Packaging keeps the coffee intact</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <article className="h-8 w-8 flex items-center justify-center bg-purpleMedium rounded-full">
                                <Coffee size={16} color="#ffffff" weight="fill" />
                            </article>
                            <span className="text-sm">Coffee arrives fresh to you</span>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <Image src={introImage} alt="" />
            </div>
        </section>
    )
}