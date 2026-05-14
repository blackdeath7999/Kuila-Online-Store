import { BUSINESS_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-cyan-700 mb-3">{BUSINESS_INFO.name}</div>
            <p className="text-slate-500 max-w-sm">
              Providing professional digital assistance and online services for our local community. Built on trust and quality.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 text-sm font-semibold uppercase tracking-wider text-slate-500">
            <a href="#" className="hover:text-cyan-600">Home</a>
            <a href="#services" className="hover:text-cyan-600">Services</a>
            <a href="#about" className="hover:text-cyan-600">About</a>
            <a href="#contact" className="hover:text-cyan-600">Contact</a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
