"use client"
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
    submenu?: { name: string; href: string }[];
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/#services', current: false },
    { name: 'Pricing', href: '/#pricing', current: false },
    { name: 'About', href: '/#about', current: false },
    { name: 'FAQ', href: '/#faq', current: false },
    { name: 'Contact Us', href: '/contact-us', current: false },
    {
        name: 'Policies',
        href: '#',
        current: false,
        submenu: [
            { name: 'Terms of Service', href: '/terms-of-service' },
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Refund Policy', href: '/refund-policy' }
        ]
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

    return (
        <>
            <Disclosure as="nav" className="navbar">

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative flex h-18 items-center justify-between" style={{ height: 68 }}>

                        {/* LOGO */}
                        <div className="flex flex-1 items-center">
                            <Link href="/" className="flex items-center gap-2">
                                <span style={{
                                    fontFamily: "'Syne', sans-serif",
                                    fontWeight: 800,
                                    fontSize: "1.35rem",
                                    color: "var(--slate-dark)",
                                    letterSpacing: "-0.02em"
                                }}>
                                    buy<span style={{ color: "var(--accent)" }}>there</span>
                                </span>
                            </Link>
                        </div>

                        {/* NAVIGATION LINKS */}
                        <div className="hidden lg:block m-auto">
                            <div className="flex items-center gap-1">
                                {navigation.map((item) => (
                                    item.submenu ? (
                                        <div
                                            key={item.name}
                                            className="relative group"
                                            onMouseEnter={() => setOpenDropdown(item.name)}
                                            onMouseLeave={() => setOpenDropdown(null)}
                                        >
                                            <button
                                                style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--slate-mid)", padding: "8px 14px", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, borderRadius: 8, transition: "all 0.2s" }}
                                                onMouseEnter={e => (e.currentTarget.style.background = "var(--cream)")}
                                                onMouseLeave={e => (e.currentTarget.style.background = "none")}
                                            >
                                                {item.name}
                                                <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                                            </button>
                                            <div style={{
                                                position: "absolute", left: 0, top: "100%", marginTop: 4,
                                                width: 220, background: "#fff", borderRadius: 12,
                                                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                                                border: "1px solid var(--border-soft)",
                                                padding: "6px",
                                                zIndex: 50,
                                                transition: "all 0.2s",
                                                opacity: openDropdown === item.name ? 1 : 0,
                                                visibility: openDropdown === item.name ? "visible" : "hidden",
                                                transform: openDropdown === item.name ? "translateY(0)" : "translateY(-6px)"
                                            }}>
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        style={{ display: "block", padding: "9px 14px", fontSize: "0.875rem", color: "var(--slate-mid)", borderRadius: 8, transition: "all 0.15s", textDecoration: "none" }}
                                                        onMouseEnter={e => { e.currentTarget.style.background = "var(--cream)"; e.currentTarget.style.color = "var(--slate-dark)"; }}
                                                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--slate-mid)"; }}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--slate-mid)", padding: "8px 14px", borderRadius: 8, textDecoration: "none", transition: "all 0.2s" }}
                                            onMouseEnter={e => { e.currentTarget.style.background = "var(--cream)"; e.currentTarget.style.color = "var(--slate-dark)"; }}
                                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--slate-mid)"; }}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: CTA + hamburger */}
                        <div className="flex items-center gap-3">
                            <Link href="/contact-us" className="hidden lg:inline-flex btn-primary" style={{ fontSize: "0.85rem", padding: "9px 20px" }}>
                                Get Started
                            </Link>
                            <div className='block lg:hidden'>
                                <Bars3Icon style={{ width: 24, height: 24, color: "var(--slate-dark)" }} aria-hidden="true" onClick={() => setIsOpen(true)} />
                            </div>
                        </div>
                    </div>
                </div>
            </Disclosure>

            {/* MOBILE DRAWER (Moved outside Disclosure to avoid clipping by backdrop-filter) */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <Drawerdata />
            </Drawer>
        </>
    )
}

export default Navbar;
