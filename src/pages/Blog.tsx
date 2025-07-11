import React from 'react';

const posts = [
  {
    title: 'The Power of Consistency in Physics Preparation',
    date: '2024-06-01',
    excerpt: 'Discover how regular practice and a disciplined approach can help you master Physics for JEE, NEET, and Olympiads. Consistency is the key to success!',
    image: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
  {
    title: 'How to Build Strong Concepts in Physics',
    date: '2024-05-20',
    excerpt: 'Learn the importance of conceptual clarity and how to develop a deep understanding of Physics topics with proven strategies and expert tips.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
  {
    title: 'Exam Success: Smart Revision Techniques',
    date: '2024-05-10',
    excerpt: 'Explore effective revision methods, memory hacks, and time management tips to boost your exam performance and confidence.',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
  {
    title: 'Why Personal Mentorship Matters',
    date: '2024-04-28',
    excerpt: 'Personalized guidance can make all the difference. See how mentorship at Physics By Ram Sir helps students achieve their academic goals.',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
  {
    title: 'Olympiads: Gateway to Excellence',
    date: '2024-04-15',
    excerpt: 'Participating in Olympiads not only sharpens your problem-solving skills but also opens doors to scholarships and recognition.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
  {
    title: 'Student Success Stories',
    date: '2024-03-30',
    excerpt: 'Be inspired by real stories of students who transformed their academic journey with Physics By Ram Sir.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
];

const Blog: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4">
    {/* Header Section with HD Background */}
    <section className="relative mb-16 overflow-hidden rounded-3xl shadow-xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-purple-900/80 opacity-80" />
      </div>
      <div className="relative z-10 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white bg-gradient-to-r from-blue-200 via-white to-blue-400 bg-clip-text text-transparent animate-fade-in-up mb-4 drop-shadow-lg">
          Blog & News
        </h1>
        <p className="text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto animate-fade-in-up delay-100">
          Insights, tips, and inspiration for Physics aspirants. Stay updated with the latest from Physics By Ram Sir.
        </p>
      </div>
    </section>

    {/* Blog Cards Grid */}
    <section className="max-w-7xl mx-auto">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-blue-100 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up relative"
          >
            {/* Blog Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            </div>
            {/* Blog Content */}
            <div className="p-6 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h2>
              <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10m-9 4h6m-7 4h8" /></svg>
                {post.date}
              </div>
              <p className="text-gray-700 mb-4 flex-1">{post.excerpt}</p>
              <a
                href={post.link}
                className="inline-block mt-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-blue-600 hover:border-blue-700 animate-fade-in-up delay-200"
              >
                Read More
              </a>
            </div>
            {/* Decorative foreground accent */}
            <div className="absolute right-4 top-4 w-10 h-10 opacity-10 pointer-events-none select-none">
              <img src="https://www.svgrepo.com/show/354380/atom.svg" alt="Atom" className="w-full h-full object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Blog; 