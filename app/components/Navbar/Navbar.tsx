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
        <Disclosure as="nav" className="navbar bg-white shadow-sm">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">

                        {/* LOGO / BRAND NAME */}
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                            <Link href="/" className="flex items-center space-x-2">
                                <span className="text-2xl font-bold text-gray-900 tracking-tight hover:text-blue-600 transition-colors duration-200">
                                   Buythere
                                </span>
                            </Link>
                        </div>

                        {/* NAVIGATION LINKS */}
                        <div className="hidden lg:block m-auto">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    item.submenu ? (
                                        <div
                                            key={item.name}
                                            className="relative group"
                                            onMouseEnter={() => setOpenDropdown(item.name)}
                                            onMouseLeave={() => setOpenDropdown(null)}
                                        >
                                            <button
                                                className={classNames(
                                                    'px-3 py-4 text-lg font-normal opacity-75 hover:text-black hover:opacity-100 space-links flex items-center gap-1'
                                                )}
                                            >
                                                {item.name}
                                                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                                            </button>
                                            <div className={`absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${openDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-200"
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
                                            className={classNames(
                                                item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                                                'px-3 py-4 text-lg font-normal opacity-75 space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* DRAWER ICON (MOBILE) */}
                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* MOBILE DRAWER */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
