import { motion } from 'motion/react';
import { STEPS } from '../constants';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Getting things done online has never been this simple. Follow these three easy steps.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-slate-200 -z-10" />

          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-cyan-600 mb-8 shadow-sm group-hover:border-cyan-200 group-hover:shadow-lg transition-all relative">
                <step.icon size={36} />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-cyan-50 rounded-3xl border border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-bold text-cyan-900 mb-2">Unsure about what you need?</h4>
            <p className="text-cyan-700">Give us a call or message. We'll guide you through the process.</p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-8 py-4 bg-white text-cyan-700 font-bold rounded-2xl border border-cyan-200 hover:bg-cyan-600 hover:text-white transition-all shadow-sm"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  );
}
