import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  Send,
  Smartphone,
  Wrench,
  ShoppingBag,
  Award,
  ShieldCheck,
  Star,
  ChevronRight
} from 'lucide-react';
import { SalesAdvisorWidget } from './components/SalesAdvisorWidget';
import { NeuralFeed } from './components/NeuralFeed';
import storeImage from './store.jpg';

function App() {
  const accentColor = '#3B82F6'; // Azul vibrante

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <SalesAdvisorWidget 
        nodeName="Top Click" 
        adn='{"report":"Venta de ropa nueva, celulares nuevos y usados, servicio técnico y accesorios","opportunity_score":95,"google_place_id":"manual","location":{"latitude":7.8939,"longitude":-72.5078},"custom_parameters":{"template":"prism","color":"azul","business_name":"Top Click","niche":"Moda y tecnología (venta de ropa, celulares y servicio técnico)","city":"Cúcuta, Colombia","description":"Venta de ropa nueva, celulares nuevos y usados, servicio técnico y accesorios"}}' 
      />

      {/* --- NAVBAR --- */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-2 w-8 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <h1 className="text-2xl font-black uppercase tracking-tighter italic">
              Top <span className="text-blue-500">Click</span>
            </h1>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
            <a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
            <a href="#feed" className="hover:text-blue-400 transition-colors">Noticias</a>
            <a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a>
          </nav>

          <a 
            href="https://wa.me/573005132164?text=Hola! Vengo desde su sitio web."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-white rounded-lg text-xs font-mono uppercase tracking-wider transition-all bg-blue-950/20"
          >
            Escríbenos
          </a>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative pt-32 pb-24 md:pt-48 md:pb-36 flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-black z-0" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-mono"
            >
              <Star size={12} className="fill-blue-400" />
              <span>Calificación Google: ⭐ 4.9 (120+ Reseñas)</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight leading-none uppercase"
            >
              Tecnología Elite <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                &amp; Moda Urbana
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg max-w-xl font-light leading-relaxed"
            >
              Tu portal de tecnología, servicio técnico garantizado y las últimas tendencias en vestuario. Conectamos tu estilo con la máxima innovación en Cúcuta.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="https://wa.me/573005132164?text=Hola! Vengo desde su sitio web y me interesa el servicio técnico."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold uppercase text-xs tracking-wider rounded-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-[1.02]"
              >
                Servicio Técnico
              </a>
              <a
                href="#servicios"
                className="px-8 py-4 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold uppercase text-xs tracking-wider rounded-lg transition-all hover:scale-[1.02]"
              >
                Explorar Tienda
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 p-3 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img
                src={storeImage}
                alt="Top Click - Tienda Física y Estilo"
                className="rounded-xl object-cover w-full h-[320px] sm:h-[400px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/50">Celulares</span>
                  <h4 className="font-bold text-lg text-white mt-1">Garantía Exclusiva</h4>
                </div>
                <div className="flex gap-1">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICIOS SECTION --- */}
      <section id="servicios" className="py-24 bg-[#030303] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-500">¿Qué Ofrecemos?</span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-2">Nuestras Soluciones</h3>
            </div>
            <p className="text-slate-400 max-w-md text-sm font-light">
              Fusionamos soporte técnico especializado con un catálogo de dispositivos móviles nuevos/usados y vestuario de moda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Servicio 1: Celulares */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-[#070911] border border-white/5 hover:border-blue-500/30 rounded-2xl transition-all group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Smartphone size={24} />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-wide mb-3">Celulares Nuevos &amp; Usados</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                Venta de dispositivos de las mejores marcas con garantía y asesoramiento personalizado. Equipos garantizados y homologados.
              </p>
              <a 
                href="https://wa.me/573005132164?text=Hola! Quiero cotizar un celular."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 group-hover:text-blue-300 hover:underline"
              >
                Cotizar Celular <ChevronRight size={14} />
              </a>
            </motion.div>

            {/* Servicio 2: Servicio Técnico */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-[#070911] border border-white/5 hover:border-blue-500/30 rounded-2xl transition-all group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Wrench size={24} />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-wide mb-3">Servicio Técnico Especializado</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                Reparación de pantallas, baterías, software y daños físicos con técnicos experimentados y repuestos garantizados.
              </p>
              <a 
                href="https://wa.me/573005132164?text=Hola! Necesito soporte o revisión para un celular."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 group-hover:text-blue-300 hover:underline"
              >
                Solicitar Soporte <ChevronRight size={14} />
              </a>
            </motion.div>

            {/* Servicio 3: Moda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-[#070911] border border-white/5 hover:border-blue-500/30 rounded-2xl transition-all group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <ShoppingBag size={24} />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-wide mb-3">Ropa Nueva y Accesorios</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                Catálogo exclusivo de ropa moderna con un estilo urbano increíble. Ropa nueva para complementar tu outfit diario.
              </p>
              <a 
                href="https://wa.me/573005132164?text=Hola! Me interesa ver el catálogo de ropa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 group-hover:text-blue-300 hover:underline"
              >
                Ver Catálogo Ropa <ChevronRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN FEED / NOTICIAS --- */}
      <section id="feed" className="py-24 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-500">Noticias de la Colmena</span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-2">Novedades &amp; Tendencias</h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <NeuralFeed nodeId="91e6342d-c0d8-440b-85b9-4a0c3a8a9959" />
          </div>
        </div>
      </section>

      {/* --- SECCIÓN CONTACTO --- */}
      <section id="contacto" className="py-24 bg-[#030303] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-500">¿Dónde Encontrarnos?</span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-2">Búnker de Operaciones</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">Dirección</h4>
                  <p className="text-slate-400 text-sm mt-1">Cúcuta, Colombia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">WhatsApp</h4>
                  <p className="text-slate-400 text-sm mt-1">+57 300 513 2164</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">Horario de Atención</h4>
                  <p className="text-slate-400 text-sm mt-1">Lunes a Sábado: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#070911] border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white uppercase tracking-wider">Top Click</h3>
                  <p className="text-slate-400 text-sm mt-1">Av. 2, Barrio Aeropuerto (entre Calles 14 y 15)</p>
                  <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mt-0.5">Cúcuta, Colombia</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Avenida+2+Barrio+Aeropuerto+Calle+14+y+15+Cucuta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Cómo Llegar
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
            
            <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 p-2 h-[260px]">
              <iframe 
                src="https://maps.google.com/maps?q=Avenida%202%20entre%20calles%2014%20y%2015,%20Barrio%20Aeropuerto,%20C%C3%BAcuta,%20Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full rounded-xl border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/10 bg-black text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-white tracking-wider">TOP CLICK</span>
            <p className="text-[10px] text-slate-600 mt-1">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
              Facebook
            </a>
          </div>

          <div className="text-[10px] text-slate-600 font-mono text-center md:text-right">
            Powered by <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">Nexus Hive Federation</a>
          </div>
        </div>
      </footer>

      {/* Botón Flotante de WhatsApp */}
      <a
        href="https://wa.me/573005132164?text=Hola! Vengo desde su sitio web."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-24 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 animate-bounce"
        style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.4)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </a>
    </div>
  );
}

// --- NEURAL_INJECTION_POINT ---

export default App;