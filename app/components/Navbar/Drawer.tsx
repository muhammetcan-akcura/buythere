import React, { ReactNode } from "react";
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {

    return (
        <main
            className={
                "fixed inset-0 z-50 bg-gray-900 bg-opacity-50 transition-opacity " +
                (isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none delay-500")
            }
        >
            <section
                className={
                    "absolute inset-y-0 left-0 w-[300px] max-w-full bg-white shadow-xl transform transition-transform duration-500 ease-in-out " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
                }
            >
                <article className="relative w-full flex flex-col h-full bg-white">
                    <header className="p-5 flex items-center justify-between border-b border-gray-100">
                        <div className="flex items-center gap-2">
                            <span style={{
                                fontFamily: "'Syne', sans-serif",
                                fontWeight: 800,
                                fontSize: "1.35rem",
                                color: "var(--slate-dark)",
                                letterSpacing: "-0.02em"
                            }}>
                                buy<span style={{ color: "var(--accent)" }}>there</span>
                            </span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                            <XMarkIcon className="block h-7 w-7" />
                        </button>
                    </header>
                    <div className="flex-1 overflow-y-auto px-4 py-6" onClick={() => setIsOpen(false)}>
                        {children}
                    </div>
                </article>
            </section>
            
            {/* Overlay click to close */}
            <section
                className="w-full h-full cursor-pointer"
                onClick={() => setIsOpen(false)}
            ></section>
        </main>
    );
}

export default Drawer;
