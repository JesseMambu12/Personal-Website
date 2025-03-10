import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer className="bg-[#010126] text-white p-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h1 className="text-3xl font-bold mt-8">Grind First!</h1>
          </div>
          <div className="md:col-span-1">
            <p className="mt-8 text-sm">
              &copy; 2025 Grind First. All rights reserved.
            </p>
          </div>
          <div className="cmd:ol-span-1 ml-30">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2 items-center">
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