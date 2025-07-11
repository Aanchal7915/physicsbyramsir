import React from 'react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    href: 'https://www.facebook.com/',
    label: 'Facebook',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" /></svg>
    ),
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
    ),
  },
  {
    href: 'https://www.youtube.com/',
    label: 'YouTube',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8.001a2.752 2.752 0 0 0-1.936-1.948C18.012 6 12 6 12 6s-6.012 0-7.864.053A2.752 2.752 0 0 0 2.2 8.001 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.752 2.752 0 0 0 1.936 1.948C5.988 18 12 18 12 18s6.012 0 7.864-.053A2.752 2.752 0 0 0 21.8 15.999 28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15V9l6 3-6 3z" /></svg>
    ),
  },
];

const Footer: React.FC = () => (
  <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-12 pb-8 mt-16 overflow-hidden animate-fade-in">
    {/* Animated SVG background accent */}
    <svg className="absolute left-0 top-0 w-64 h-64 opacity-10 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="30" strokeDasharray="8 4" />
    </svg>
    <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Contact */}
      <div className="flex flex-col gap-2 animate-fade-up">
        <h2 className="font-extrabold text-xl mb-2 tracking-wide flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-300 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m9-4V7a5 5 0 0 0-10 0v3a5 5 0 0 0 10 0z" /></svg>
          Contact Us
        </h2>
        <p className="text-blue-100">C5A/306B, Janakpuri, New Delhi - 110058, 110078</p>
        <p>Email: <a href="mailto:rampraveshxlv@gmail.com" className="underline hover:text-blue-300 transition-colors duration-300">rampraveshxlv@gmail.com</a></p>
        <p>Phone: <a href="tel:+919810082561" className="underline hover:text-blue-300 transition-colors duration-300">+91 98100 82561</a></p>
        <div className="flex gap-4 mt-3">
          {socialLinks.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-blue-200 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      {/* Useful Links */}
      <div className="flex flex-col gap-2 animate-fade-up delay-100">
        <h2 className="font-extrabold text-xl mb-2 tracking-wide flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-300 animate-pulse" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
          Useful Links
        </h2>
        <ul className="space-y-1">
          <li><Link to="/" className="hover:text-blue-300 transition-colors duration-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-300 transition-colors duration-300">About Us</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-300 transition-colors duration-300">Gallery</Link></li>
          <li><Link to="/blog" className="hover:text-blue-300 transition-colors duration-300">Blog News</Link></li>
          <li><Link to="/privacy" className="hover:text-blue-300 transition-colors duration-300">Privacy Policy</Link></li>
        </ul>
      </div>
      {/* Courses */}
      <div className="flex flex-col gap-2 animate-fade-up delay-200">
        <h2 className="font-extrabold text-xl mb-2 tracking-wide flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-300 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeDasharray="4 2" /></svg>
          Our Courses
        </h2>
        <ul className="space-y-1">
          <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">NEET Coaching</li>
          <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">JEE MAIN</li>
          <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">JEE Advance</li>
          <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">NTSE Coaching</li>
          <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">Olympiads Coaching</li>
        </ul>
      </div>
    </div>
    <div className="relative z-10 text-center mt-12 text-sm text-blue-200 animate-fade-in">
      <span className="inline-block px-4 py-2 rounded-lg bg-blue-800/60 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-blue-700/80">
        &copy; 2024 Physics By Ram Sir &mdash; All Rights Reserved
      </span>
    </div>
    {/* Custom Animations */}
    <style>{`
      .animate-fade-in { animation: fadeIn 1s ease both; }
      .animate-fade-up { animation: fadeUp 1s cubic-bezier(.4,2,.6,1) both; }
      .animate-spin-slow { animation: spin 8s linear infinite; }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes spin { 100% { transform: rotate(360deg); } }
    `}</style>
  </footer>
);

export default Footer; 