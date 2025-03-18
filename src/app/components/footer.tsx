import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#010126] text-white p-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-left">
          <div className="md:col-span-1">
            <h1 className="text-3xl font-bold mt-8">Grind First!</h1>
          </div>
          <div className="md:col-span-1">
            <p className="mt-8 text-sm">
              &copy; 2025 Grind First. All rights reserved.
            </p>
          </div>
          <div className="md:col-span-1 flex flex-col md:items-center">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2 md:items-center">
              <FaFacebookSquare className="text-gray-400 hover:text-white w-8 h-8" />
              <RiTwitterXLine
                href="#"
                className="text-gray-400 hover:text-white w-8 h-8"
              />
              <FaSquareInstagram
                href="#"
                className="text-gray-400 hover:text-white w-8 h-8"
              />
            </div>
          </div>
        </div>
      </footer>
    );
}