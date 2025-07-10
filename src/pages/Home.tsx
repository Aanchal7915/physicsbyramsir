import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <div>
    <section className="bg-gradient-to-r from-blue-100 to-blue-300 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Welcome to Physics By Ram Sir</h1>
      <p className="text-lg md:text-xl text-blue-800 mb-8">A leading coaching institute for JEE, NEET, Olympiads, and more.</p>
      <Link to="/trial" className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition">Book Trial Class</Link>
    </section>
    <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Mission</h2>
        <p className="text-gray-700 mb-4">To be a beacon of knowledge, guiding and empowering students to excel not only academically but also in life. Enjoy 4 days of trial classes for online learning at an exclusive price of just ₹59. Unlock a full year of enriching online classes for only ₹3000.</p>
        <Link to="/courses" className="text-blue-700 underline font-medium">Explore Our Courses</Link>
      </div>
      <div className="flex justify-center">
        <img src="/assets/hero-physics.png" alt="Physics By Ram Sir" className="rounded-lg shadow-lg w-full max-w-md" />
      </div>
    </section>
  </div>
);

export default Home; 