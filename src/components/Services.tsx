import { motion } from 'motion/react';
import { Stethoscope, Heart, Activity, Microscope, Syringe, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: "Wellness & Prevention",
    description: "Comprehensive health screenings and personalized preventative care plans designed for longevity."
  },
  {
    icon: Activity,
    title: "Advanced Diagnostics",
    description: "State-of-the-art imaging and laboratory services for precise and rapid health insights."
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Expert heart care using the latest echocardiography and monitoring technologies."
  },
  {
    icon: Microscope,
    title: "Internal Medicine",
    description: "Complex case management with a holistic approach to your pet's systemic health."
  },
  {
    icon: Syringe,
    title: "Surgery & Anesthesia",
    description: "Minimally invasive procedures performed in our hospital-grade surgical suites."
  },
  {
    icon: Sparkles,
    title: "Holistic Therapies",
    description: "Acupuncture, laser therapy, and nutritional counseling for balanced well-being."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-black">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 md:flex items-end justify-between">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-indigo-400 font-medium tracking-widest uppercase text-sm mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white mb-6"
            >
              Clinical Excellence, <br />
              <span className="text-white/50 italic">Elevated Experience.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-md mt-6 md:mt-0 leading-relaxed"
          >
            We combine cutting-edge veterinary science with an environment of serenity, ensuring every visit is as stress-free as it is effective.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-panel p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-indigo-300 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-serif text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/40 group-hover:text-indigo-300 transition-colors">
                  <span>Learn More</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                    <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
