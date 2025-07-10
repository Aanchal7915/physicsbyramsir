import React from 'react';

const posts = [
  { title: 'How to Prepare for JEE Main', date: '2024-04-01', excerpt: 'Tips and strategies to excel in JEE Main.' },
  { title: 'NEET: Last Minute Revision', date: '2024-03-20', excerpt: 'Effective revision techniques for NEET aspirants.' },
  { title: 'Olympiads: Why Participate?', date: '2024-02-15', excerpt: 'Benefits of participating in science Olympiads.' },
];

const Blog: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-blue-900 mb-8">Blog & News</h1>
    <div className="space-y-6">
      {posts.map((post, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-800 mb-1">{post.title}</h2>
          <div className="text-sm text-gray-500 mb-2">{post.date}</div>
          <p className="text-gray-700">{post.excerpt}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Blog; 