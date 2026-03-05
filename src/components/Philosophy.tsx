import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=2070&auto=format&fit=crop"
                alt="Vet holding a puppy with care"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-panel p-6 rounded-xl">
                  <p className="text-xl font-serif italic text-white mb-2">
                    "Medicine is a science, but care is an art."
                  </p>
                  <p className="text-sm text-white/60 uppercase tracking-widest">
                    Dr. Elena Vance, Chief Veterinarian
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border border-white/10 rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-white/5 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Where Compassion <br />
              <span className="text-white/40">Meets Precision.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
              <p>
                At AuraVet, we believe that veterinary care should be a seamless extension of the love you have for your pet. We have reimagined the clinical experience to remove anxiety and replace it with confidence.
              </p>
              <p>
                Our facility is designed with biophilic principles, using natural light, sound dampening, and pheromone technology to create a sanctuary of healing.
              </p>
              <p>
                Every diagnosis is explained with clarity. Every treatment is chosen with purpose. We are not just treating patients; we are nurturing families.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif text-white mb-2">15+</h4>
                <p className="text-sm text-white/50 uppercase tracking-wider">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-white mb-2">24/7</h4>
                <p className="text-sm text-white/50 uppercase tracking-wider">Emergency Care</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
