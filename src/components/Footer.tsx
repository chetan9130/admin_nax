import { Link } from "react-router-dom";
import logo from "@/assets/logos/nlogo.png";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-purple-950/30 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="col-span-1 md:col-span-1">
            <img src={logo} alt="Naxshatraa AI" className="h-21 w-25 mb-4" />
            {/* <p className="text-white/70 text-sm">
              Innovate. Automate. Elevate.
            </p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/solutions" className="text-white/70 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/case-studies" className="text-white/70 hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-white/70 hover:text-white transition-colors">Blog & Resources</Link></li>
              <li><Link to="/industries" className="text-white/70 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/partners" className="text-white/70 hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="text-white/70 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal & Contact</h3>
            <ul className="space-y-2 mb-4">
              <li><Link to="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
            <p className="text-white/70 text-sm mb-1">hello@naxshatraaai.tech</p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Naxshatraa AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};