import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-700">Physics By Ram Sir</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
        <Link to="/about" className="hover:text-blue-600 font-medium">About Us</Link>
        <Link to="/courses" className="hover:text-blue-600 font-medium">Courses</Link>
        <Link to="/trial" className="hover:text-blue-600 font-medium">Book Trial Class</Link>
        <Link to="/gallery" className="hover:text-blue-600 font-medium">Gallery</Link>
        <Link to="/blog" className="hover:text-blue-600 font-medium">Blog</Link>
        <Link to="/contact" className="hover:text-blue-600 font-medium">Contact Us</Link>
      </div>
    </div>
  </nav>
);

export default Navbar; 