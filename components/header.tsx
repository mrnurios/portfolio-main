import React from "react";

const Header: React.FC = () => {
    return (
        <header className="transition-all duration-500 z-50 mx-auto bg-neutral-900/70 top-0 fixed w-full px-10 md:px-20 h-16 flex items-center gap-2 py-5 text-white">
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
                    className="bg-amber-400 rounded-md px-5 py-2 transition text-brand text-center text-nowrap"
                >
                    Contact Me
                </a>
            </nav>
        </header>
    );
};

export default Header;
