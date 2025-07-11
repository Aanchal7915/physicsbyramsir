import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', icon: '📚' },
    { id: 'jee', name: 'JEE', icon: '🎯' },
    { id: 'neet', name: 'NEET', icon: '🏥' },
    { id: 'olympiad', name: 'Olympiads', icon: '🏆' },
    { id: 'board', name: 'Board', icon: '📖' }
  ];

  const courses = [
    {
      id: 1,
      name: 'NEET Coaching',
      category: 'neet',
      desc: 'Comprehensive preparation for NEET with expert guidance and personalized study plans.',
      duration: '12 Months',
      students: '1200+',
      price: '₹15,000',
      originalPrice: '₹25,000',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Live Classes', 'Doubt Sessions', 'Mock Tests', 'Study Material'],
      level: 'Advanced',
      rating: 4.8
    },
    {
      id: 2,
      name: 'JEE MAIN',
      category: 'jee',
      desc: 'Focused coaching for JEE Main with in-depth concept clarity and problem-solving techniques.',
      duration: '10 Months',
      students: '1500+',
      price: '₹18,000',
      originalPrice: '₹28,000',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Video Lectures', 'Practice Tests', 'Performance Analytics', 'Expert Support'],
      level: 'Advanced',
      rating: 4.9
    },
    {
      id: 3,
      name: 'JEE Advanced',
      category: 'jee',
      desc: 'Advanced problem-solving and exam strategies for JEE Advanced with intensive practice.',
      duration: '14 Months',
      students: '800+',
      price: '₹22,000',
      originalPrice: '₹35,000',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      features: ['Advanced Problems', 'Strategy Sessions', 'Previous Papers', 'Personal Mentoring'],
      level: 'Expert',
      rating: 4.9
    },
    {
      id: 4,
      name: 'NTSE Coaching',
      category: 'olympiad',
      desc: 'Specialized training for NTSE aspirants with comprehensive subject coverage.',
      duration: '8 Months',
      students: '600+',
      price: '₹12,000',
      originalPrice: '₹20,000',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Scholarship Focus', 'Mental Ability', 'Science & Maths', 'Mock Tests'],
      level: 'Intermediate',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Science Olympiads',
      category: 'olympiad',
      desc: 'Preparation for various science Olympiads with international standards.',
      duration: '6 Months',
      students: '400+',
      price: '₹10,000',
      originalPrice: '₹18,000',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['International Level', 'Problem Solving', 'Theory & Practical', 'Expert Guidance'],
      level: 'Expert',
      rating: 4.8
    },
    {
      id: 6,
      name: '11th & 12th Physics',
      category: 'board',
      desc: 'CBSE and board exam preparation for 11th and 12th with conceptual clarity.',
      duration: '12 Months',
      students: '2000+',
      price: '₹8,000',
      originalPrice: '₹15,000',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      features: ['Board Syllabus', 'Concept Videos', 'Practice Questions', 'Exam Preparation'],
      level: 'Intermediate',
      rating: 4.6
    },
    {
      id: 7,
      name: 'Foundation Course',
      category: 'board',
      desc: 'Strong foundation building for science students from class 8-10.',
      duration: '9 Months',
      students: '1800+',
      price: '₹6,000',
      originalPrice: '₹12,000',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Basic Concepts', 'Interactive Learning', 'Regular Tests', 'Parent Updates'],
      level: 'Beginner',
      rating: 4.5
    },
    {
      id: 8,
      name: 'Crash Course',
      category: 'all',
      desc: 'Intensive revision and practice for last-minute exam preparation.',
      duration: '3 Months',
      students: '500+',
      price: '₹5,000',
      originalPrice: '₹10,000',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Quick Revision', 'Important Topics', 'Mock Tests', 'Doubt Clearing'],
      level: 'All Levels',
      rating: 4.4
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Explore Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Choose from our comprehensive range of courses designed to help you excel in your academic journey. 
            From foundation to advanced levels, we have the perfect course for every student.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-400">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.level === 'Expert' ? 'bg-red-500 text-white' :
                      course.level === 'Advanced' ? 'bg-orange-500 text-white' :
                      course.level === 'Intermediate' ? 'bg-blue-500 text-white' :
                      'bg-green-500 text-white'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {course.desc}
                  </p>

                  {/* Course Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {course.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Course Stats */}
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {course.students}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                      Save ₹{(parseInt(course.originalPrice.replace('₹', '').replace(',', '')) - parseInt(course.price.replace('₹', '').replace(',', ''))).toLocaleString()}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/trial"
                    className="group/btn w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-semibold text-center block transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Enroll Now
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No Courses Message */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600">Try selecting a different category or check back later for new courses.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their academic careers 
            with our expert guidance and comprehensive courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/trial" 
              className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
            >
              Book Free Trial Class
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              to="/contact" 
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses; 