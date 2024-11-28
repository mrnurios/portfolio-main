"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
    const typedElement = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const options = {
            strings: [
                "web developer.",
                "programmer.",
                "front-end developer.",
                "data scraper.",
                "data encoder.",
                "data analyst.",
                "photo editor.",
                "freelancer.",
                "tech enthusiast.",
                "graphic designer.",
                "creative problem solver.",
            ],
            typeSpeed: 35, // Typing speed in milliseconds
            backSpeed: 30, // Backspacing speed
            backDelay: 1000, // Delay before backspacing
            startDelay: 500, // Delay before starting to type
            loop: true, // Loop the typing effect
            showCursor: true, // Show blinking cursor
        };

        // Initialize Typed.js
        const typed = new Typed(typedElement.current, options);

        // Cleanup on unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="relative flex flex-col h-screen w-full overflow-hidden">
            <span
                className="duration-300 ease-[cubic-bezier(0.2,0.49,0.32,0.99)] absolute bg-cover bg-fixed bg-center size-[110%] "
                style={{
                    backgroundImage: "url('/img/7.2.png')",
                }}
            ></span>
            <span
                className="duration-300 ease-[cubic-bezier(0.2,0.49,0.32,0.99)] absolute bg-cover bg-fixed bg-center size-[110%]"
                style={{
                    backgroundImage: "url('/img/7.1.png')",
                }}
            ></span>
            <span className="after:size-full after:absolute after:bg-black/90"></span>
            <div className="mx-auto max-w-7xl px-10 md:px-20 h-full w-full flex flex-col justify-center text-white">
                <div className="relative">
                    <div className="text-left grid gap-y-5 max-w-xl">
                        <h1 className="font-black text-7xl text-amber-400">
                            Hi, I&apos;m Clyb.
                        </h1>
                        <p
                            className="flex text-lg items-center"
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="500"
                            data-aos-easing="ease-in-out"
                        >
                            <span>I&apos;m a&nbsp;</span>
                            <span
                                ref={typedElement}
                                className="inline-block text-white min-w-fit"
                            ></span>
                        </p>
                        <div className="grid grid-cols-2 gap-x-5 text-center">
                            <a
                                href="#projects"
                                className="transition-all duration-500 hover:bg-amber-400 hover:text-white rounded-lg ring-1 ring-amber-400 text-amber-400 w-full px-5 py-2 ring-inset"
                            >
                                PROJECTS
                            </a>
                            <a
                                href="#contactme"
                                className="transition-all duration-500 hover:bg-amber-400 hover:text-white rounded-lg ring-1 ring-amber-400 text-amber-400 w-full px-5 py-2 ring-inset"
                            >
                                CONTACT ME
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="absolute bottom-0 h-20 w-full bg-gradient-to-t from-neutral-900 to-transparent"></div> */}
        </section>
    );
}
