import React, { useState, useEffect } from 'react';
import { Calendar, ArrowUpRight, Share2, Check } from 'lucide-react';

interface FeedItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image_url?: string;
  video_url?: string;
}

export const NeuralFeed: React.FC<{ nodeId?: string }> = ({ nodeId = 'node_top_click' }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  const localFallbacks: FeedItem[] = [
    {
      id: 'fallback-1',
      category: "Tecnología",
      title: "Nuevos Dispositivos de Alta Gama Disponibles",
      excerpt: "Ya recibimos los últimos modelos homologados con garantía nacional. ¡Aprovecha nuestros precios de lanzamiento!",
      content: "Ya recibimos los últimos modelos homologados con garantía nacional. ¡Aprovecha nuestros precios de lanzamiento!",
      date: "Hoy"
    },
    {
      id: 'fallback-2',
      category: "Soporte",
      title: "Servicio Técnico Express en Cúcuta",
      excerpt: "Reparamos tu pantalla o batería en tiempo récord. Agenda tu cita hoy mismo a través de nuestro botón de WhatsApp.",
      content: "Reparamos tu pantalla o batería en tiempo récord. Agenda tu cita hoy mismo a través de nuestro botón de WhatsApp.",
      date: "Ayer"
    },
    {
      id: 'fallback-3',
      category: "Moda",
      title: "Nueva Colección de Ropa y Outfits de Temporada",
      excerpt: "Llegó la nueva colección con estilos urbanos súper exclusivos. Encuentra tu talla antes de que se agoten.",
      content: "Llegó la nueva colección con estilos urbanos súper exclusivos. Encuentra tu talla antes de que se agoten.",
      date: "Hace 3 días"
    }
  ];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrY3R4eW95YWpxcmhhYXZuenJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5MTM1NDUsImV4cCI6MjA5MzQ4OTU0NX0.-RQMZ8LJCt7OIVjTtH999BwuvkltPcPb9Arfevr3MZo";
        const url = `https://lkctxyoyajqrhaavnzrv.supabase.co/rest/v1/news?tags=cs.{"${nodeId}"}&status=eq.published&order=created_at.desc`;
        
        const response = await fetch(url, {
          headers: {
            "apikey": apiKey,
            "Authorization": `Bearer ${apiKey}`
          }
        });

        if (!response.ok) throw new Error("Failed to fetch news");
        const data = await response.json();

        if (data && data.length > 0) {
          const formatted = data.map((item: any) => ({
            id: item.id,
            category: item.category || "Novedad",
            title: item.title,
            excerpt: item.summary || item.content?.substring(0, 120) + "..." || "",
            content: item.content || "",
            date: item.published_at ? new Date(item.published_at).toLocaleDateString('es-CO', { day: '2-digit', month: 'short' }) : "Reciente",
            image_url: item.image_url || undefined,
            video_url: item.video_url || undefined
          }));
          setFeedItems(formatted);
        } else {
          setFeedItems(localFallbacks);
        }
      } catch (err) {
        console.error("Error loading news feed:", err);
        setFeedItems(localFallbacks);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [nodeId]);

  const handleShare = async (item: FeedItem) => {
    const shareData = {
      title: item.title,
      text: `${item.excerpt} - Leído en Top Click.`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error al compartir:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${item.title}\n\n${item.excerpt}\n\nLeer más aquí: ${window.location.href}`);
        setCopiedId(item.id);
        setTimeout(() => setCopiedId(null), 2000);
      } catch (err) {
        console.error("No se pudo copiar el texto:", err);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {feedItems.map((item) => (
          <div 
            key={item.id}
            className="p-6 rounded-2xl bg-[#070911] border border-white/5 hover:border-green-500/20 hover:bg-green-950/5 transition-all group duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Media rendering (Video or Image) */}
              {item.video_url && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-black border border-white/5">
                  <video 
                    src={item.video_url} 
                    controls 
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                </div>
              )}
              {!item.video_url && item.image_url && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-black border border-white/5">
                  <img 
                    src={item.image_url} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-green-400 bg-green-950/80 px-2.5 py-1 rounded border border-green-900/40">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                  <Calendar size={10} />
                  {item.date}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-400 text-xs font-light leading-relaxed mb-4">
                {item.excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
              <a 
                href={`https://wa.me/573005132164?text=Hola! Me interesa saber más sobre la noticia: "${item.title}"`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
              >
                Saber más <ArrowUpRight size={12} />
              </a>
              <button
                onClick={() => handleShare(item)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all flex items-center justify-center"
                title="Compartir noticia"
              >
                {copiedId === item.id ? (
                  <Check size={12} className="text-green-400" />
                ) : (
                  <Share2 size={12} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
