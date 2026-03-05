import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-orange-400 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-serif font-medium tracking-wide text-white">
                Aura<span className="text-white/50">Vet</span>
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed">
              Redefining veterinary medicine through a lens of luxury, empathy, and uncompromising clinical standards.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-indigo-400" />
                <span>123 Serenity Lane,<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-indigo-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-indigo-400" />
                <span>concierge@auravet.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Hours</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">10:00 AM - 4:00 PM</span>
              </li>
              <li className="pt-2 text-indigo-400 text-xs uppercase tracking-widest">
                24/7 Emergency On-Call
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-white/50 text-sm mb-4">
              Join our circle for pet health insights and clinic updates.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-full transition-colors"
              />
              <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-xs">
            © 2026 Aura Veterinary Clinic. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="text-white/40 hover:text-white transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
