import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { BUSINESS_INFO, TESTIMONIALS } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {BUSINESS_INFO.founderStory}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We understand that digital services can be intimidating for many. That's why we prioritize patience, clear communication, and transparency in everything we do. Whether you're a student applying for exams or a senior paying utility bills, we're here to help.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-2xl font-bold text-cyan-600 mb-1">Fast</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Processing</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-2xl font-bold text-cyan-600 mb-1">Secure</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Data Handling</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
                alt="Workspace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-cyan-900/10" />
            </div>
            {/* Design element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" />
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">What Our Customers Say</h3>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
              >
                <div className="text-cyan-100 absolute top-6 right-8">
                  <Quote size={48} />
                </div>
                <p className="text-slate-700 italic mb-6 relative z-10">"{t.text}"</p>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
