'use client'
import React, { useState } from "react";
import Link from "next/link"; // Import Link dari Next.js
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#010126] p-3 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">Grind First!</h1>

                {/* Desktop Menu */}
                <ul className="space-x-5 text-md text-white ml-auto hidden md:flex">
                    <li>
                        <Link href="/" className="hover:underline">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/expertise" className="hover:underline">
                            Expertise
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="hover:underline">
                            Portofolio
                        </Link>
                    </li>
                    <li>
                        <Link href="/testimonial" className="hover:underline">
                            Testimonial
                        </Link>
                    </li>
                    <li>
                        <Link href="/experience" className="hover:underline">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div
                    className="md:hidden text-3xl text-white cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="absolute top-full left-0 w-full bg-[#010126] shadow-md flex flex-col text-center p-4 space-y-4 md:hidden">
                    <li>
                        <Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/expertise" className="hover:underline" onClick={() => setIsOpen(false)}>
                            Expertise
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="hover:underline" onClick={() => setIsOpen(false)}>
                            Portofolio
                        </Link>
                    </li>
                    <li>
                        <Link href="/testimonial" className="hover:underline" onClick={() => setIsOpen(false)}>
                            Testimonial
                        </Link>
                    </li>
                    <li>
                        <Link href="/experience" className="hover:underline" onClick={() => setIsOpen(false)}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}
