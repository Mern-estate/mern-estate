import { Link } from 'react-router-dom';

export default function Footer() {
  const landlordEmail = 'info@sewaghar.com';

  return (
    <footer className="bg-slate-900 text-gray-300 py-4 mt-auto">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16 text-sm">
        {/* Contact Info */}
        <div>
          <h2 className="text-white text-md font-semibold mb-1">Contact</h2>
          <p className="text-sm">
            Phone:{' '}
            <a
              href="tel:+9779812345678"
              className="text-blue-400 hover:underline cursor-pointer"
            >
              +977-9812345678
            </a>
          </p>
          <p className="mt-1 text-sm">
            Email:{' '}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${landlordEmail}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline cursor-pointer break-all"
            >
              {landlordEmail}
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:pl-6">
          <h2 className="text-white text-md font-semibold mb-2">Quick Links</h2>
          <ul className="flex flex-wrap gap-4 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" className="hover:underline">
                Browse Listings
              </Link>
            </li>
            <li>
              <Link to="/create-listing" className="hover:underline">
                Post Property
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-400 mt-4">
        © 2025 SewaGhar. All rights reserved.
      </div>
    </footer>
  );
}
