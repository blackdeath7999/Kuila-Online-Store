import { motion } from 'motion/react';
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="p-8 md:p-16 lg:p-20 bg-cyan-700 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Get in Touch</h2>
                <p className="text-cyan-50 mb-12 text-lg leading-relaxed">
                  Have questions about a service or want to check document requirements? Reach out to us directly through any of these channels.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-cyan-200 font-bold uppercase tracking-wider mb-1">Email Us</div>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="text-lg font-semibold hover:underline">
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-cyan-200 font-bold uppercase tracking-wider mb-1">WhatsApp</div>
                      <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">
                        Chat with us now
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-cyan-200 font-bold uppercase tracking-wider mb-1">Location</div>
                      <div className="text-lg font-semibold">
                        Visit our store in person for physical services
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-16 pt-12 border-t border-white/10">
                  <p className="text-cyan-200 block mb-4 font-medium italic">"Serving with trust since 2014"</p>
                </div>
              </motion.div>
            </div>
            
            {/* Enquiry Form */}
            <div className="p-8 md:p-16 lg:p-20 bg-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send an Enquiry</h3>
                
                <form 
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="Your mobile number"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Service Type</label>
                      <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                        <option>General Support</option>
                        <option>Ticket Booking</option>
                        <option>Form Filling</option>
                        <option>Bill Payment</option>
                        <option>PAN/Aadhaar</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Your Message</label>
                    <textarea 
                      placeholder="How can we help you today?"
                      rows={4}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>
                  
                  <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                    <Send size={18} />
                    Submit Enquiry
                  </button>
                  
                  <p className="text-xs text-slate-400 text-center">
                    We'll get back to you within 24 hours.
                  </p>
                </form>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
