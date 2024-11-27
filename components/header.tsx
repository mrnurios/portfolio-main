import React from "react";

const Header: React.FC = () => {
    return (
        <header className="transition-all duration-500 z-50 mx-auto top-0 fixed w-full px-10 md:px-20 h-14 flex items-center gap-2 py-5 text-white bg-amber-400/0">
            <div className="flex justify-start w-40">Logo</div>
            <nav className="flex flex-1 justify-end items-center">
                <a
                    href="#contactme"
                    className="rounded-md px-3 transition text-brand"
                >
                    About
                </a>
                <a
                    href="#contactme"
                    className="bg-neutral-900 rounded-md px-5 py-2 transition text-brand text-center text-nowrap"
                >
                    Contact Me
                </a>
            </nav>
        </header>
    );
};

export default Header;
