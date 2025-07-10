import React from 'react';

const courses = [
  { name: 'NEET Coaching', desc: 'Comprehensive preparation for NEET with expert guidance.' },
  { name: 'JEE MAIN', desc: 'Focused coaching for JEE Main with in-depth concept clarity.' },
  { name: 'JEE Advance', desc: 'Advanced problem-solving and exam strategies for JEE Advanced.' },
  { name: 'NTSE Coaching', desc: 'Specialized training for NTSE aspirants.' },
  { name: 'Olympiads Coaching', desc: 'Preparation for various science Olympiads.' },
  { name: 'XTSE Exam Coaching', desc: 'Coaching for XTSE and other competitive exams.' },
  { name: '11th and 12th Class Coaching', desc: 'CBSE and board exam preparation for 11th and 12th.' },
  { name: 'Science Coaching', desc: 'Science coaching for all levels.' },
];

const Courses: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-blue-900 mb-8">Our Courses</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => (
        <div key={course.name} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">{course.name}</h2>
          <p className="text-gray-700">{course.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Courses; 