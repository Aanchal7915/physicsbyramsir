import React from 'react';

const images = Array.from({ length: 9 }, (_, i) => `/assets/gallery${i + 1}.jpg`);

const Gallery: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-blue-900 mb-8">Gallery</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((src, idx) => (
        <div key={idx} className="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
          <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-48 object-cover" />
        </div>
      ))}
    </div>
  </div>
);

export default Gallery; 