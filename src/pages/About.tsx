import React from 'react';

const About: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-blue-900 mb-6">About Us</h1>
    <p className="text-lg text-gray-700 mb-4">Physics By Ram Sir is a leading coaching institute that has been providing quality education for JEE, NEET, Olympiads, and more. Our mission is to empower students to excel academically and in life.</p>
    <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-2">Our Values</h2>
    <ul className="list-disc ml-6 text-gray-700">
      <li>Quality Education</li>
      <li>Student-Centric Approach</li>
      <li>Experienced Faculty</li>
      <li>Holistic Development</li>
      <li>Continuous Support</li>
    </ul>
  </div>
);

export default About; 