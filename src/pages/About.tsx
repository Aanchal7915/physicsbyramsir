import React from 'react';

const values = [
  {
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 0C7.582 4 4 7.582 4 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8z" /></svg>
    ),
    title: 'Quality Education',
    desc: 'Delivering the highest standards of teaching for JEE, NEET, Olympiads, and more.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
    ),
    title: 'Student-Centric Approach',
    desc: 'Personalized attention and mentorship for every student.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 10V5a3 3 0 00-6 0v5m6 0a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
    ),
    title: 'Experienced Faculty',
    desc: 'Guidance from renowned educators with proven track records.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 0C7.582 4 4 7.582 4 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8z" /></svg>
    ),
    title: 'Holistic Development',
    desc: 'Fostering academic excellence and life skills for overall growth.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    ),
    title: 'Continuous Support',
    desc: 'Ongoing doubt-solving, mentoring, and motivation.'
  },
];

const features = [
  {
    icon: '🎓',
    title: 'Result-Oriented Coaching',
    desc: 'Consistent top ranks in JEE, NEET, Olympiads, and Board Exams.'
  },
  {
    icon: '💡',
    title: 'Conceptual Clarity',
    desc: 'Focus on building strong fundamentals and problem-solving skills.'
  },
  {
    icon: '🌐',
    title: 'Hybrid Learning',
    desc: 'Online and offline classes with interactive resources.'
  },
  {
    icon: '🤝',
    title: 'Personal Mentorship',
    desc: '1-on-1 guidance and regular progress tracking.'
  },
];

const stats = [
  { number: '10,000+', label: 'Students Mentored' },
  { number: '95%', label: 'Success Rate' },
  { number: '15+', label: 'Years of Excellence' },
  { number: '100+', label: 'Expert Faculty' },
];

const About: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 animate-fade-in">
    {/* Hero Section with HD Background */}
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden">
      {/* HD Physics/Education Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80')` // Physics classroom
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-purple-900/80 opacity-80" />
      </div>
      {/* Foreground SVG accent */}
      <div className="absolute left-0 bottom-0 w-40 h-40 opacity-20 pointer-events-none select-none">
        <img src="https://www.svgrepo.com/show/354380/atom.svg" alt="Atom" className="w-full h-full object-contain" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white bg-gradient-to-r from-blue-200 via-white to-blue-400 bg-clip-text text-transparent animate-fade-in-up mb-6 drop-shadow-lg">
          About Physics By Ram Sir
        </h1>
        <p className="text-lg md:text-2xl text-blue-100 mb-8 animate-fade-in-up delay-100">
          Empowering students to achieve academic excellence and personal growth through quality education, mentorship, and innovation for JEE, NEET, Olympiads, and beyond.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/80 rounded-xl shadow-lg px-6 py-4 m-2 min-w-[140px] transition-transform duration-300 hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold text-blue-700 animate-pulse">{stat.number}</div>
              <div className="text-gray-700 text-sm md:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision Section with Side Illustration */}
    <section className="py-16 px-4 max-w-5xl mx-auto relative">
      {/* Side Illustration (right) */}
      <img 
        src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=600&q=80" 
        alt="Teacher with students" 
        className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 object-cover rounded-3xl shadow-2xl opacity-70 border-4 border-blue-100" 
        style={{zIndex: 1}}
      />
      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Our Mission</h2>
          <p className="text-lg text-gray-700">
            To ignite curiosity, foster deep understanding, and inspire students to reach their highest potential in Physics and beyond. We believe in nurturing not just academic brilliance, but also confidence, character, and a lifelong love for learning.
          </p>
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-2">Our Vision</h2>
          <p className="text-lg text-gray-700">
            To be the most trusted and innovative Physics coaching institute, shaping future leaders and thinkers who excel in academics and life.
          </p>
        </div>
        <div className="flex flex-col gap-6 animate-fade-in-right">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img src="https://physicsbyramsir.com/images/ram-sir.jpg" alt="Ram Sir" className="w-20 h-20 rounded-full border-4 border-blue-200 shadow-md hover:scale-105 transition-transform duration-300" />
              <div>
                <div className="text-xl font-bold text-blue-900">Ram Sir</div>
                <div className="text-gray-600 text-sm">Founder & Chief Mentor</div>
              </div>
            </div>
            <p className="text-gray-700 text-base italic">
              "I believe every student has the potential to excel. With the right guidance, dedication, and support, success is inevitable. Join us to experience a transformative journey in Physics!"
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values Section with Chalkboard Pattern */}
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 px-4 relative overflow-hidden">
      {/* Chalkboard/Equations Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none select-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80')` // Chalkboard with equations
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 animate-fade-in-up">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition-all duration-300 animate-fade-in-up delay-100">
              <div className="mb-4 animate-bounce-slow">{val.icon}</div>
              <div className="text-xl font-semibold text-blue-800 mb-2">{val.title}</div>
              <div className="text-gray-600">{val.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us Section with Foreground Accent */}
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Foreground accent: lightbulb SVG */}
      <div className="absolute left-0 top-0 w-24 h-24 opacity-10 pointer-events-none select-none">
        <img src="https://www.svgrepo.com/show/354380/atom.svg" alt="Atom" className="w-full h-full object-contain" />
      </div>
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 animate-fade-in-up">Why Choose Physics By Ram Sir?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-100">
          We stand apart for our commitment to excellence, innovation, and student success. Here’s what makes us unique:
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <div key={i} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-blue-100 transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-200">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Call to Action with Graduation Cap */}
    <section className="py-12 text-center relative">
      <div className="absolute right-8 top-4 w-16 h-16 opacity-20 pointer-events-none select-none">
        <img src="https://www.svgrepo.com/show/303251/graduation-cap-education.svg" alt="Graduation Cap" className="w-full h-full object-contain" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 animate-fade-in-up">Ready to Start Your Journey?</h2>
      <p className="text-lg text-gray-700 mb-6 animate-fade-in-up delay-100">Join Physics By Ram Sir and unlock your true potential in Physics and beyond.</p>
      <a
        href="/trial"
        className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-blue-600 hover:border-blue-700 animate-fade-in-up delay-200"
      >
        Book a Free Trial Class
      </a>
    </section>
  </div>
);

export default About; 