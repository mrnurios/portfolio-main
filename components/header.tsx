"use client";
import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
    const [height, setHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const updateHeight = () => {
            setHeight(window.innerHeight); // Set the height dynamically based on the current window height
            if (window.scrollY > height) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("resize", updateHeight);
        window.addEventListener("scroll", updateHeight);
        updateHeight(); // Set initial height

        return () => {
            window.removeEventListener("resize", updateHeight);
            window.addEventListener("scroll", updateHeight);
        };
    }, [height]);

    return (
        <header
            className={`transition-all duration-500 z-50 mx-auto top-0 fixed w-full px-10 md:px-20 h-16 flex items-center gap-2 py-5 text-white ${
                isScrolled ? "bg-neutral-900/80" : ""
            }`}
        >
            <div className="flex justify-start w-40"></div>
            <nav className="flex flex-1 justify-end items-center">
                <a
                    href="#aboutme"
                    className="rounded-md px-3 transition text-brand"
                >
                    About
                </a>
                <a
                    href="#contactme"
                    className="relative group bg-amber-400 rounded-md px-5 py-2 transition-all text-brand text-center text-nowrap overflow-clip"
                >
                    <span className="absolute transition-opacity duration-500 inset-0 size-full bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative font-semibold text-sm">
                        Contact Me
                    </span>
                </a>
            </nav>
        </header>
    );
};

export default Header;
