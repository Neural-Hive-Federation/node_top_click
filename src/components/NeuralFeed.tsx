import React from 'react';
import { Sparkles, Calendar, ArrowUpRight } from 'lucide-react';

interface FeedItem {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

export const NeuralFeed: React.FC<{ nodeId?: string }> = () => {
  const feedItems: FeedItem[] = [
    {
      id: 1,
      category: "Tecnología",
      title: "Nuevos Dispositivos de Alta Gama Disponibles",
      excerpt: "Ya recibimos los últimos modelos homologados con garantía nacional. ¡Aprovecha nuestros precios de lanzamiento!",
      date: "Hoy"
    },
    {
      id: 2,
      category: "Soporte",
      title: "Servicio Técnico Express en Cúcuta",
      excerpt: "Reparamos tu pantalla o batería en tiempo récord. Agenda tu cita hoy mismo a través de nuestro botón de WhatsApp.",
      date: "Ayer"
    },
    {
      id: 3,
      category: "Moda",
      title: "Nueva Colección de Ropa y Outfits de Temporada",
      excerpt: "Llegó la nueva colección con estilos urbanos súper exclusivos. Encuentra tu talla antes de que se agoten.",
      date: "Hace 3 días"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {feedItems.map((item) => (
          <div 
            key={item.id}
            className="p-6 rounded-2xl bg-[#070911] border border-white/5 hover:border-blue-500/20 hover:bg-blue-950/5 transition-all group duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-900/40">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                  <Calendar size={10} />
                  {item.date}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-400 text-xs font-light leading-relaxed mb-4">
                {item.excerpt}
              </p>
            </div>
            <a 
              href="https://wa.me/573005132164?text=Hola! Me interesa saber más sobre la noticia: de la web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
            >
              Saber más <ArrowUpRight size={12} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
