export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">clove</span>
              <span className="text-gray-400 text-sm ml-1">dental</span>
            </h3>
            <p className="text-gray-400 text-sm">
              India's Leading dental care brand with 600+ clinics nationwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition">Locations</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Root Canal</a></li>
              <li><a href="#" className="hover:text-white transition">Dental Implants</a></li>
              <li><a href="#" className="hover:text-white transition">Aligners</a></li>
              <li><a href="#" className="hover:text-white transition">Teeth Whitening</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Phone: 985-6589-510</li>
              <li>Email: info@clovedental.in</li>
              <li>Hours: Mon-Sat, 9AM-9PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <p>All Rights Reserved 2024, Clove Dental (a brand name of M/s. SStar Dental Centre Private Limited).</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
