import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    caption: 'Inspiring Physics Classroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    caption: 'Students Engaged in Learning',
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    caption: 'Modern Science Lab',
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    caption: 'Physics Experiments in Action',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80',
    caption: 'Teamwork and Collaboration',
  },
  {
    src: 'https://images.unsplash.com/photo-1465808883808-8a8b1b6b2b5a?auto=format&fit=crop&w=600&q=80',
    caption: 'Cutting-edge Technology',
  },
  {
    src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80',
    caption: 'Interactive Physics Demos',
  },
  {
    src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80',
    caption: 'Passionate Teaching',
  },
  {
    src: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
    caption: 'Celebrating Achievements',
  },
];

const Gallery: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4 animate-fade-in">
    {/* Animated Section Header */}
    <div className="flex flex-col items-center mb-10">
      <div className="relative inline-block">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-2 animate-slide-down">Gallery</h1>
        {/* Decorative SVG accent */}
        <svg className="absolute -top-4 -right-8 w-12 h-12 opacity-30 text-blue-400 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeDasharray="4 2" />
        </svg>
      </div>
      <p className="text-lg text-blue-700 mt-2 animate-fade-in delay-200">A glimpse into our vibrant learning environment and memorable moments.</p>
    </div>
    {/* Gallery Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="relative group rounded-xl overflow-hidden shadow-lg bg-white/80 hover:shadow-2xl transition-all duration-300 animate-fade-up"
        >
          <img
            src={img.src}
            alt={img.caption}
            className="w-full h-64 object-cover transform group-hover:scale-105 group-hover:brightness-110 transition-transform duration-300 ease-in-out"
            loading="lazy"
          />
          {/* Overlay Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-base font-semibold drop-shadow animate-fade-in delay-150">{img.caption}</p>
          </div>
          {/* Foreground SVG accent */}
          <svg className="absolute top-3 right-3 w-7 h-7 text-blue-300 opacity-60 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m12.02 0l-1.41-1.41M6.34 6.34L4.93 4.93" />
          </svg>
        </div>
      ))}
    </div>
    {/* Subtle floating animation for the grid */}
    <style>{`
      .animate-fade-in { animation: fadeIn 1s ease both; }
      .animate-slide-down { animation: slideDown 0.8s cubic-bezier(.4,2,.6,1) both; }
      .animate-fade-up { animation: fadeUp 1s cubic-bezier(.4,2,.6,1) both; }
      .animate-spin-slow { animation: spin 8s linear infinite; }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes slideDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes spin { 100% { transform: rotate(360deg); } }
    `}</style>
  </div>
);

export default Gallery; 