/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, MapPin, Phone, Clock, ArrowRight, 
  CheckCircle2, Star, Sparkles, Activity, Shield
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Therapies', href: '#therapies' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Location', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#FCFBF8] font-sans text-stone-800 selection:bg-amber-200 selection:text-stone-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white shadow-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className={`text-2xl font-bold tracking-tight text-stone-900`}>
                Wellness <span className="font-serif italic font-medium text-amber-700">Centre</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-sm font-semibold text-stone-600 hover:text-amber-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a href="#pricing" className="bg-stone-900 hover:bg-amber-800 text-white px-7 py-3 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-amber-900/20 tracking-wide">
                Book for ₹199
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <button 
              className="md:hidden text-stone-900 bg-white p-2 rounded-full shadow-md border border-stone-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#FCFBF8] pt-28 pb-6 px-6 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-6 flex flex-col">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-medium tracking-tight text-stone-900 border-b border-stone-200 pb-4"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#pricing" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-stone-900 text-amber-50 text-center py-5 rounded-[2rem] shadow-xl text-lg font-bold"
            >
              Book First Session - ₹199
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-amber-100/50 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-50 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-100 shadow-sm text-amber-800 text-sm font-bold mb-8 uppercase tracking-wide">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                Premium automated massage
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-stone-900 leading-[1.1] mb-6">
                Advanced <span className="text-amber-700 italic font-serif font-medium">Recovery</span> in Rajnagar Ext.
              </h1>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed">
                Experience unparalleled relief with our luxury Zero-Gravity massage chairs and targeted leg & knee therapy systems. Precision technology designed for absolute relaxation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a href="#pricing" className="w-full sm:w-auto bg-stone-900 hover:bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-bold transition-all text-center inline-flex justify-center items-center gap-2 shadow-xl hover:-translate-y-1">
                  1st Session at ₹199 <ArrowRight className="w-5 h-5" />
                </a>
                <span className="text-sm text-stone-500 font-medium">Walk-ins Welcome</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-stone-900/10 border-8 border-white bg-stone-100">
                {/* 
                  NOTE: Replace this Unsplash image with your uploaded chair image from Lovable 
                  For now, using a premium spa aesthetic placeholder. 
                */}
                <img 
                  src="/hero-chair.webp" 
                  alt="Premium Massage Setup" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-8 bg-white/95 backdrop-blur-md p-5 rounded-[2rem] shadow-xl max-w-[220px] border border-amber-50"
              >
                <div className="flex gap-4 items-center">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-700 shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 leading-tight">Zero-Gravity</h3>
                    <p className="text-xs text-stone-500 mt-1 font-medium">Spinal decompression</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 -right-8 bg-white/95 backdrop-blur-md p-5 rounded-[2rem] shadow-xl max-w-[240px] border border-amber-50"
              >
                <div className="flex gap-4 items-center">
                  <div className="bg-stone-900 p-3 rounded-full text-white shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 leading-tight">Total Privacy</h3>
                    <p className="text-xs text-stone-500 mt-1 font-medium">No manual therapist needed</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="therapies" className="py-24 relative overflow-hidden bg-white rounded-[4rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm border border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-4">Our Technology</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-stone-900 tracking-tight">Focus on what matters.</h3>
            <p className="text-stone-600 text-lg sm:text-xl font-medium leading-relaxed">
              We specialize in deep, targeted machine therapy. Consistent, professional, and calibrated for optimal muscle recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Full Body */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FCFBF8] border border-stone-100 rounded-[3rem] p-8 sm:p-12 hover:shadow-xl hover:border-amber-100 transition-all duration-300"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-3xl">💺</span>
              </div>
              <h4 className="text-3xl font-bold text-stone-900 mb-4 tracking-tight">Full Body Immersion</h4>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                Our 4D L-Track chairs scan your body to deliver shiatsu, kneading, and tapping exactly where you need it. Features integrated heat and rhythmic air compression from shoulders to calves.
              </p>
              <ul className="space-y-4 font-medium text-stone-700">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-600" /> Advanced Body Scanning</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-600" /> Heated Lumbar Support</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-600" /> Zero-Gravity Recline</li>
              </ul>
            </motion.div>

            {/* Leg & Knee */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#FCFBF8] border border-stone-100 rounded-[3rem] p-8 sm:p-12 hover:shadow-xl hover:border-amber-100 transition-all duration-300"
            >
              <div className="bg-stone-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-3xl">🦵</span>
              </div>
              <h4 className="text-3xl font-bold text-stone-900 mb-4 tracking-tight">Leg & Knee Therapy</h4>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                Targeted relief for active individuals and chronic pain. Our specialized lower-body machines use 360-degree air compression, heat, and reflexology rollers to rejuvenate tired joints.
              </p>
              <ul className="space-y-4 font-medium text-stone-700">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-stone-900" /> Joint Heat Therapy</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-stone-900" /> 360° Air Compression</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-stone-900" /> Deep Foot Reflexology</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 lg:py-32 bg-[#FCFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-4">Our Environment</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-stone-900 tracking-tight">Experience Luxury.</h3>
            <p className="text-stone-600 text-lg font-medium leading-relaxed">
              Take a look inside our premium fully-automated wellness lounge. Recreate this stunning relaxing atmosphere in Rajnagar Extension.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main large image - Luxury White/Gold Chair */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 aspect-[16/9] lg:aspect-auto relative rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src="/white-gold-chair.png" 
                alt="Luxury White and Gold Full Body Massage Chair" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 bg-stone-100" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>
            
            {/* Right stacked image - Brown Leg Massager */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-square md:aspect-[4/5] lg:aspect-auto relative rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src="/brown-leg-massager.jpg" 
                alt="Advanced Brown Foot and Calf Massager" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 bg-stone-100" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>

            {/* Bottom 1 - White/Grey Chair */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-square relative rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src="/white-grey-chair.jpg" 
                alt="Premium White and Grey Massage Chair" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 bg-stone-100" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>

            {/* Bottom 2 - Leg Massager Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="aspect-square relative rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src="/leg-massager-features.jpg" 
                alt="Leg Massager Features and Functions" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 bg-stone-100" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>

            {/* Bottom 3 - Integrated Heat Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="aspect-square relative rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src="/integrated-heat.jpg" 
                alt="Integrated Heat Rollers Therapy" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 bg-stone-100" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing / Offer Section */}
      <section id="pricing" className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-stone-900 text-white rounded-[4rem] p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/30 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/20 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-sm font-bold tracking-widest text-amber-400 uppercase mb-6">Introductory Offer</h2>
              <h3 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tighter">Your First Session</h3>
              <div className="flex justify-center items-start gap-2 mb-8">
                <span className="text-3xl font-bold text-amber-400 mt-2">₹</span>
                <span className="text-7xl sm:text-8xl font-bold tracking-tighter">199</span>
              </div>
              <p className="text-xl text-stone-300 font-medium max-w-2xl mx-auto mb-12">
                Experience full-body relaxation or targeted leg & knee therapy at a fraction of the cost. Limited time offer for new clients in Rajnagar Extension.
              </p>
              
              <a href="#contact" className="inline-block bg-white text-stone-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-amber-50 hover:scale-105 transition-all shadow-[0_0_40px_rgba(251,191,36,0.3)]">
                Claim Offer Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="py-24 bg-white border-t border-stone-100 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-stone-900 tracking-tight">Find Your Balance</h2>
              <p className="text-stone-600 mb-12 text-lg font-medium">Located in the heart of Rajnagar Extension. Book your session today and discover the benefits of automated, high-end wellness technology.</p>
              
              <div className="space-y-8 bg-[#FCFBF8] p-8 rounded-[2.5rem] border border-stone-100">
                <div className="flex items-center gap-6">
                  <div className="bg-amber-100 p-4 rounded-full">
                    <MapPin className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-1">Location</h4>
                    <p className="text-lg font-bold text-stone-900">Rajnagar Extension<br/>Ghaziabad, UP</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="bg-stone-100 p-4 rounded-full">
                    <Phone className="w-6 h-6 text-stone-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-1">Contact</h4>
                    <p className="text-lg font-bold text-stone-900">Book via WhatsApp or Call</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="bg-rose-50 p-4 rounded-full">
                    <Clock className="w-6 h-6 text-rose-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-1">Hours</h4>
                    <p className="text-lg font-bold text-stone-900">Open Daily</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Form Block */}
            <div className="bg-[#FCFBF8] rounded-[3rem] p-8 sm:p-12 shadow-xl border border-stone-100">
              <h3 className="text-3xl font-bold mb-8 tracking-tight text-stone-900">Book Appointment</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-600 uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-white border border-stone-200 rounded-2xl focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-medium" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-600 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" className="w-full px-5 py-4 bg-white border border-stone-200 rounded-2xl focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-medium" placeholder="+91" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-600 uppercase tracking-wider">Service Needed</label>
                  <select className="w-full px-5 py-4 bg-white border border-stone-200 rounded-2xl focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all font-medium appearance-none">
                    <option>First Session Offer - ₹199</option>
                    <option>Full Body Automated Massage</option>
                    <option>Leg & Knee Therapy</option>
                  </select>
                </div>
                <button className="w-full bg-stone-900 hover:bg-amber-700 text-white font-bold py-5 rounded-2xl transition-all duration-300 mt-4 shadow-xl text-lg">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-stone-900">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="font-bold tracking-tight">Wellness Centre</span>
          </div>
          <p className="text-stone-500 font-medium text-sm">© {new Date().getFullYear()} Wellness Centre, Rajnagar Ext. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
