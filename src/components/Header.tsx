import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">clove</span>
            <span className="text-xs text-gray-500 ml-1">dental</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">Services</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">Locations</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:985-6589-510" className="flex items-center text-gray-900 font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              985-6589-510
            </a>
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-md hover:bg-gray-800 transition">
              Book Appointment
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">Locations</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">Contact</a>
            <a href="tel:985-6589-510" className="block text-gray-900 font-semibold">
              985-6589-510
            </a>
            <button className="w-full bg-gray-900 text-white px-6 py-2.5 rounded-md">
              Book Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
