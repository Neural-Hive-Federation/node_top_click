import React from 'react';
import { motion } from 'framer-motion';
import { SalesAdvisorWidget } from './components/SalesAdvisorWidget';
import { NeuralFeed } from './components/NeuralFeed';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      <SalesAdvisorWidget 
        nodeName="Top Click" 
        adn="&quot;{\&quot;report\&quot;:\&quot;Venta de ropa nueva, celulares nuevos y usados, servicio técnico y accesorios\&quot;,\&quot;opportunity_score\&quot;:95,\&quot;google_place_id\&quot;:\&quot;manual\&quot;,\&quot;location\&quot;:{\&quot;latitude\&quot;:7.8939,\&quot;longitude\&quot;:-72.5078},\&quot;custom_parameters\&quot;:{\&quot;template\&quot;:\&quot;prism\&quot;,\&quot;color\&quot;:\&quot;azul\&quot;,\&quot;business_name\&quot;:\&quot;Top Click\&quot;,\&quot;niche\&quot;:\&quot;Moda y tecnología (venta de ropa, celulares y servicio técnico)\&quot;,\&quot;city\&quot;:\&quot;Cúcuta, Colombia\&quot;,\&quot;description\&quot;:\&quot;Venta de ropa nueva, celulares nuevos y usados, servicio técnico y accesorios\&quot;}}&quot;" 
      />
      
      const accentColor = '#F97316';

const App = () => {
  
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
            <h1 className="text-3xl font-black uppercase tracking-tighter italic">
              Top <span style={{ color: accentColor }}>Click</span>
            </h1>
          </motion.div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="text-gray-700 hover:text-orange-500 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-orange-500 transition-colors">Servicios</a>
            <a href="#contacto" className="text-gray-700 hover:text-orange-500 transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl font-black mb-6">
                Tecnología y Moda<br />
                <span style={{ color: accentColor }}>al Mejor Precio</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                En Top Click ofrecemos celulares nuevos y usados, servicio técnico especializado y las últimas tendencias en moda femenina.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contacto"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Contáctanos
                </a>
                <a
                  href="#servicios"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Nuestros Servicios
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Top Click - Tecnología y Moda"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Phone size={24} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Llámanos ahora</p>
                  <p className="font-bold text-orange-500">+57 310 555 1234</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Celulares</h3>
                <p className="text-gray-600">Nuevos y usados con garantía. Encuentra el modelo perfecto para ti.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Servicio Técnico</h3>
                <p className="text-gray-600">Reparación de celulares con técnicos certificados y repuestos originales.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Moda Femenina</h3>
                <p className="text-gray-600">Las últimas tendencias en ropa para mujer con la mejor relación calidad-precio.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="servicios" className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-4">Nuestros Servicios</h2>
              <div className="h-1 w-20 bg-orange-500 mx-auto mb-4" />
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                En Top Click nos especializamos en ofrecer productos y servicios de calidad con atención personalizada.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="contacto" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-black mb-6">Contáctanos</h2>
                <p className="text-gray-600 mb-8">
                  ¿Tienes alguna pregunta o necesitas más información? ¡Estamos aquí para ayudarte!
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Phone size={24} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-bold">Teléfono</p>
                      <p className="text-gray-600">+57 310 555 1234</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Mail size={24} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-gray-600">contacto@topclick.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <MapPin size={24} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-bold">Dirección</p>
                      <p className="text-gray-600">Calle 12 # 34-56, Local 101, Centro Comercial La Florida, Cúcuta, Colombia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Clock size={24} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-bold">Horario</p>
                      <p className="text-gray-600">Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Domingos: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <a href="https://facebook.com/topclickcucuta" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="https://instagram.com/topclickcucuta" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://youtube.com/@topclickcucuta" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors">
                    <Youtube size={24} />
                  </a>
                  <a href="https://wa.me/573105551234" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors">
                    <Send size={24} />
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Top Click</h3>
              <p className="text-gray-400 mb-4">
                Tu tienda de confianza en tecnología y moda en Cúcuta. Celulares nuevos y usados, servicio técnico especializado y las últimas tendencias en ropa femenina.
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com/topclickcucuta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com/topclickcucuta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com/@topclickcucuta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="https://wa.me/573105551234" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Send size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-orange-500" />
                  <span>+57 310 555 1234</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-orange-500" />
                  <span>contacto@topclick.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-orange-500" />
                  <span>Calle 12 # 34-56, Local 101, Centro Comercial La Florida, Cúcuta</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-orange-500" />
                  <span>Lun-Sáb: 9:00 AM - 7:00 PM | Dom: 10:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Top Click. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Powered by{' '}
              <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">
                PNN Portal Neural Nexus | Nexus Hive Federation
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

      {/* --- SECCIONES INTERMEDIAS DINÁMICAS --- */}
      // ... [SECCIONES INTERMEDIAS...]

      <NeuralFeed nodeId="91e6342d-c0d8-440b-85b9-4a0c3a8a9959" />

      {/* Sección de Ubicación Física */}
      
      <section className="py-20 bg-[#050505] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white uppercase tracking-wider">Top Click</h3>
                <p className="text-slate-400 text-sm mt-1">Cúcuta, Colombia</p>
                <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mt-0.5">Cúcuta, Colombia</p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=7.8939,-72.5078" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
            >
              Cómo Llegar
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </section>
      

      <footer className="py-12 border-t border-white/10 bg-[#020202] text-slate-400">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-white tracking-wider">TOP CLICK</span>
            <p className="text-[10px] text-slate-600 mt-1">&copy; 2026 Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-6">
            
            
            
            
          </div>
          <div className="text-[10px] text-slate-500 font-mono text-center md:text-right">
            Powered by <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Nexus Hive Federation</a>
          </div>
        </div>
      </footer>

      
    </div>
  );
}

// --- NEURAL_INJECTION_POINT ---

export default App;