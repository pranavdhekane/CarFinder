import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="flex items-center justify-around bg-white border-2 border-black rounded-xl py-3 m-4 shadow-md">
        <div className="text-3xl font-bold text-black">
          <a href="/">
          Car<span className="text-blue-600">Finder</span>
          </a>
        </div>

        <div className="hidden md:flex gap-8 text-lg font-medium text-gray-800 [&_a:hover]:text-blue-600 [&_a]:transition">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/cars">Find Cars</a>
          <a href="/wishlist">Wishlist</a>
        </div>
        
        <button className="md:hidden" onClick={toggleSidebar}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-22 left-4 right-4 bg-white border-2 border-black rounded-xl z-50 shadow-lg p-6 flex flex-col gap-4 text-lg font-medium text-gray-800 [&_a:hover]:text-blue-600 [&_a]:transition">
          <a href="/" onClick={toggleSidebar}>Home</a>
          <a href="/about" onClick={toggleSidebar}>About</a>
          <a href="/cars" onClick={toggleSidebar}>Find Cars</a>
          <a href="/wishlist" onClick={toggleSidebar}>Wishlist</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
