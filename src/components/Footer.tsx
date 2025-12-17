import { ShoppingBag, Facebook, Twitter, Instagram, Mail, Phone, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#003D7A] to-[#001f3f] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#C8102E] p-3 rounded-xl">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold">Patriots Snack Store</h3>
                <p className="text-sm text-blue-200">Newark Charter School</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Fueling Patriots since 1996! Your favorite snacks, drinks, and treats 
              available daily during school hours. Student-run with love. ❤️
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-[#C8102E] transition-all duration-300 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-[#C8102E] transition-all duration-300 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-[#C8102E] transition-all duration-300 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="mb-6 font-bold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-blue-200 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Home</span>
                </a>
              </li>
              <li>
                <a 
                  href="#deals" 
                  className="text-blue-200 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Daily Deals</span>
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  className="text-blue-200 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Full Menu</span>
                </a>
              </li>
              <li>
                <a 
                  href="#hours" 
                  className="text-blue-200 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Hours & Info</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.newarkcharterschool.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">School Website</span>
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="mb-6 font-bold">Contact & Hours</h4>
            <ul className="space-y-4 text-blue-200">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-300 mb-1">Email Us</p>
                  <a
                    href="mailto:snackstore@newarkcharter.org"
                    className="hover:text-white transition-colors break-all"
                  >
                    snackstore@newarkcharter.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-300 mb-1">Location</p>
                  <p>Main Cafeteria<br />Next to lunch line</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Store Hours Banner */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-blue-200 mb-1">Before School</p>
              <p className="font-bold">7:30 - 7:55 AM</p>
            </div>
            <div>
              <p className="text-sm text-blue-200 mb-1">Lunch A</p>
              <p className="font-bold">11:15 - 11:45 AM</p>
            </div>
            <div>
              <p className="text-sm text-blue-200 mb-1">Lunch B</p>
              <p className="font-bold">12:00 - 12:30 PM</p>
            </div>
            <div>
              <p className="text-sm text-blue-200 mb-1">After School</p>
              <p className="font-bold">2:45 - 3:15 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-blue-200 mb-2">
            © {new Date().getFullYear()} Newark Charter Patriots Snack Store. All rights reserved.
          </p>
          <p className="text-sm text-blue-300">
            Operated by Student Council • Proceeds support school programs 🎓
          </p>
        </div>
      </div>
    </footer>
  );
}
