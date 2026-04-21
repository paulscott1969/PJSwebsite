import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-32 text-gray-300 sm:pb-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white">PJS PLUMBING</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">&amp; Heating Services</span>
            </Link>
            <p className="text-sm leading-relaxed">
              I've been fixing pipes and boilers across Liverpool for 40 years. No call centres, no hidden fees—just a proper job from a local engineer who knows his stuff.
            </p>
                        <a 
              href="https://www.gassaferegister.co.uk/checkbusiness?bid=HLlbZxceM%252fmirePRUTS9Cw%253d%253d&cp=X4%252f9g6W4dHiAXQ6u1cr%252bRul1hBObcEL30E%252bYedIZhds%253d" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ShieldCheck className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Gas Safe Reg #221708</span>
            </a>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/TheHuytonPlumber/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PJS Plumbing on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-blue-600 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/paulyplumb1969"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PJS Plumbing on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-blue-600 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Paul</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">What I do</Link></li>
              <li><Link to="/service-areas" className="hover:text-white transition-colors">Where I work</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Common Questions</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/boiler-repair-servicing" className="hover:text-white transition-colors">Boiler Repair &amp; Servicing</Link></li>
              <li><Link to="/emergency-plumber-liverpool" className="hover:text-white transition-colors">Emergency Plumber Liverpool</Link></li>
              <li><Link to="/emergency-plumber-huyton" className="hover:text-white transition-colors">Emergency Plumber Huyton</Link></li>
              <li><Link to="/emergency-plumber-prescot" className="hover:text-white transition-colors">Emergency Plumber Prescot</Link></li>
              <li><Link to="/boiler-repair-knowsley" className="hover:text-white transition-colors">Boiler Repair Knowsley</Link></li>
              <li><Link to="/boiler-repair-huyton" className="hover:text-white transition-colors">Boiler Repair Huyton</Link></li>
              <li><Link to="/heating" className="hover:text-white transition-colors">Central Heating</Link></li>
              <li><Link to="/plumbing" className="hover:text-white transition-colors">General Plumbing</Link></li>
              <li><Link to="/gas-safety-certificate-liverpool" className="hover:text-white transition-colors">Gas Safety Certificates</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Get in touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-blue-400" />
                <div>
                  <a href="tel:01514402614" className="font-bold text-white hover:text-blue-400 transition-colors">0151 440 2614</a>
                  <p className="text-xs opacity-60">Call me 24/7 for emergencies</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-blue-400" />
                <div>
                  <p className="font-bold text-white">Office</p>
                  <p className="mb-2 text-gray-300">48 Archway Rd<br />Liverpool L36 9XE<br />United Kingdom</p>
                  <p className="text-xs opacity-60">Serving Liverpool, Knowsley &amp; surrounding areas.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-12 border-gray-800" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-xs opacity-60">
              © {currentYear} PJS Plumbing &amp; Heating Services. All rights reserved.
            </p>
            <p className="text-xs opacity-60">
              PJS Plumbing &amp; Heating Services, Liverpool &amp; Knowsley, Merseyside. Tel: 0151 440 2614
            </p>
            <p className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
              Website by <a href="https://sensflow.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Sensflow</a>
            </p>
          </div>
          <div className="flex gap-6 text-xs opacity-60">
            <a href="tel:01514402614" className="hover:text-white">Tel: 0151 440 2614</a>
            <a href="https://www.gassaferegister.co.uk/checkbusiness?bid=HLlbZxceM%252fmirePRUTS9Cw%253d%253d&cp=X4%252f9g6W4dHiAXQ6u1cr%252bRul1hBObcEL30E%252bYedIZhds%253d" target="_blank" rel="noopener noreferrer" className="hover:text-white">Gas Safe #221708</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
