import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-blue-900 text-white py-8 mt-12">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 className="font-bold text-lg mb-2">Contact Us</h2>
        <p>C5A/306B, Janakpuri, New Delhi - 110058, 110078</p>
        <p>Email: <a href="mailto:rampraveshxlv@gmail.com" className="underline">rampraveshxlv@gmail.com</a></p>
        <p>Phone: <a href="tel:+919810082561" className="underline">+91 98100 82561</a></p>
      </div>
      <div>
        <h2 className="font-bold text-lg mb-2">Useful Links</h2>
        <ul className="space-y-1">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
          <li><Link to="/blog" className="hover:underline">Blog News</Link></li>
          <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-lg mb-2">Our Courses</h2>
        <ul className="space-y-1">
          <li>NEET Coaching</li>
          <li>JEE MAIN</li>
          <li>JEE Advance</li>
          <li>NTSE Coaching</li>
          <li>Olympiads Coaching</li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-8 text-sm text-gray-300">&copy; 2024 Physics By Ram Sir || All Rights Reserved</div>
  </footer>
);

export default Footer; 