import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "The level of care at AuraVet is simply unmatched. They treated my Golden Retriever, Max, not just as a patient, but as a beloved family member. The facility feels more like a spa than a clinic.",
    author: "Sarah Jenkins",
    role: "Dog Owner",
    rating: 5
  },
  {
    text: "I was anxious about my cat's surgery, but Dr. Vance and her team were incredible. The transparency, the calm environment, and the post-op care were flawless. Truly a premium experience.",
    author: "Michael Chen",
    role: "Cat Owner",
    rating: 5
  },
  {
    text: "Finally, a vet clinic that understands the anxiety of both pets and owners. The waiting area is serene, the staff is soft-spoken, and the medical expertise is top-tier. Highly recommended.",
    author: "Elena Rodriguez",
    role: "Pet Parent",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Trusted by <span className="text-white/50 italic">Families.</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0, 
                  scale: activeIndex === index ? 1 : 0.9,
                  filter: activeIndex === index ? 'blur(0px)' : 'blur(10px)',
                  zIndex: activeIndex === index ? 10 : 0
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <div className="mb-8 text-indigo-400 opacity-50">
                  <Quote size={48} />
                </div>
                
                <p className="text-xl md:text-3xl font-light text-white/90 leading-relaxed mb-10 font-serif italic">
                  "{testimonial.text}"
                </p>

                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <h4 className="text-lg font-medium text-white">{testimonial.author}</h4>
                <p className="text-sm text-white/50 uppercase tracking-widest">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  activeIndex === index ? 'w-8 bg-indigo-500' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
