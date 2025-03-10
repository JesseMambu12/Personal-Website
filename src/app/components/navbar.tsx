'use client'
import React, { useState } from "react";
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
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Expertise
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Portofolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Experience
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
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
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Expertise
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Portofolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Experience
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    )
    } 