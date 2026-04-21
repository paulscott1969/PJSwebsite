import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, ShieldCheck, Clock, Award, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const servicesDropdown = [
  { name: 'Boiler Repair & Servicing', path: '/boiler-repair-servicing' },
  { name: 'Emergency Plumber', path: '/emergency-plumber-liverpool' },
  { name: 'Heating: Installation & Repairs', path: '/heating' },
  { name: 'Plumbing', path: '/plumbing' },
  { name: 'Gas Safety Certificates', path: '/gas-safety-certificate-liverpool' },
  { name: 'All Services', path: '/services' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Areas', path: '/service-areas' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      {/* Top Trust Bar */}
      <div className="hidden bg-blue-900 py-1.5 text-white sm:block">
        <div className="container mx-auto flex justify-between px-6 text-[11px] font-medium uppercase tracking-wider">
          <div className="flex gap-6">
            <a
              href="https://www.gassaferegister.co.uk/checkbusiness?bid=HLlbZxceM%252fmirePRUTS9Cw%253d%253d&cp=X4%252f9g6W4dHiAXQ6u1cr%252bRul1hBObcEL30E%252bYedIZhds%253d"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-200 transition-colors"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-blue-300" /> Gas Safe Reg #221708
            </a>
            <span className="flex items-center gap-1.5"><Award className="h-3.5 w-3.5 text-blue-300" /> 40 Years on the Tools</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-blue-300" /> 24/7 Emergency Callouts</span>
          </div>
          <div className="flex gap-4">
            <span>Covering Liverpool &amp; Knowsley</span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-black tracking-tighter text-blue-900">PJS PLUMBING</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">&amp; Heating Services</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.slice(0, 2).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn("text-sm font-semibold transition-colors hover:text-blue-600", isActive ? "text-blue-600" : "text-gray-600")
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-gray-600 transition-colors hover:text-blue-600"
            >
              Services
              <ChevronDown className={cn("h-4 w-4 transition-transform", isServicesOpen && "rotate-180")} />
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 rounded-2xl border border-gray-100 bg-white py-2 shadow-xl">
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navItems.slice(2).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn("text-sm font-semibold transition-colors hover:text-blue-600", isActive ? "text-blue-600" : "text-gray-600")
              }
            >
              {item.name}
            </NavLink>
          ))}

          <a
            href="tel:01514402614"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95"
          >
            <Phone className="h-4 w-4 fill-current" />
            0151 440 2614
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-600 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-gray-100 bg-white p-6 shadow-xl lg:hidden">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => cn("text-lg font-bold", isActive ? "text-blue-600" : "text-gray-800")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => cn("text-lg font-bold", isActive ? "text-blue-600" : "text-gray-800")}
            >
              About
            </NavLink>

            {/* Mobile Services Section */}
            <div>
              <p className="mb-2 text-lg font-bold text-gray-800">Services</p>
              <div className="ml-4 flex flex-col gap-2">
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-semibold text-gray-600 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => cn("text-lg font-bold", isActive ? "text-blue-600" : "text-gray-800")}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/service-areas"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => cn("text-lg font-bold", isActive ? "text-blue-600" : "text-gray-800")}
            >
              Areas
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => cn("text-lg font-bold", isActive ? "text-blue-600" : "text-gray-800")}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => cn("text-lg font-bold", isActive ? "text-blue-600" : "text-gray-800")}
            >
              Contact
            </NavLink>

            <hr className="my-2 border-gray-100" />
            <a
              href="tel:01514402614"
              className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-xl font-black text-white"
            >
              <Phone className="h-6 w-6 fill-current" />
              Call 0151 440 2614
            </a>
          </div>
        </div>
      )}

      {/* Emergency Banner */}
      <a
        href="tel:01514402614"
        className="block w-full bg-red-600 py-3 text-center font-bold text-white transition-colors hover:bg-red-700"
      >
        <span className="hidden sm:inline">
          <span className="inline-block animate-pulse">🚨</span> Plumbing Emergency? Call Paul Now — 0151 440 2614
        </span>
        <span className="inline sm:hidden">
          <span className="inline-block animate-pulse">🚨</span> Emergency? Tap to Call Paul
        </span>
      </a>
    </header>
  );
}
