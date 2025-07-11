import React, { useState } from 'react';

const trialInfo = [
  {
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 0C7.582 4 4 7.582 4 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8z" /></svg>
    ),
    label: 'Location',
    value: 'C5A/306B, Janakpuri, New Delhi',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4" /></svg>
    ),
    label: 'Email',
    value: 'rampraveshxlv@gmail.com',
    link: 'mailto:rampraveshxlv@gmail.com',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
    ),
    label: 'Phone',
    value: '+91 98100 82561',
    link: 'tel:+919810082561',
  },
];

const courseOptions = [
  'NEET Coaching',
  'JEE MAIN',
  'JEE Advance',
  'NTSE Coaching',
  'Olympiads Coaching',
  'XTSE Exam Coaching',
  '11th and 12th Class Coaching Institute',
  'Coaching or CBSE Students',
  'Science Coaching',
];

const Trial: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focus, setFocus] = useState({ name: false, phone: false, email: false, message: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocus({ ...focus, [e.target.name]: true });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocus({ ...focus, [e.target.name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-12 px-4 animate-fade-in">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none select-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80')` }} />
      <div className="relative z-10 w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Info Card */}
        <div className="bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col gap-8 border border-blue-100 animate-fade-in-left">
          <div className="flex items-center gap-3 mb-2">
            <img src="https://www.svgrepo.com/show/354380/atom.svg" alt="Atom" className="w-10 h-10 opacity-80" />
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 bg-gradient-to-r from-blue-400 via-blue-700 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">Book a Trial Class</h1>
          </div>
          <p className="text-lg text-gray-700 mb-4 animate-fade-in-up delay-100">Experience our teaching style, meet our expert faculty, and get a feel for our learning environment. Book your trial class today!</p>
          <div className="space-y-6">
            {trialInfo.map((info, i) => (
              <div key={i} className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                <div className="bg-blue-50 p-3 rounded-full shadow group-hover:bg-blue-100 transition-colors duration-300">{info.icon}</div>
                <div>
                  <div className="text-base font-semibold text-blue-800">{info.label}</div>
                  {info.link ? (
                    <a href={info.link} className="text-blue-600 underline font-medium hover:text-blue-800 transition-colors duration-200">{info.value}</a>
                  ) : (
                    <div className="text-gray-700 font-medium">{info.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 text-blue-700 animate-fade-in-up delay-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" /></svg>
            <span className="font-semibold">Trial Timings:</span>
            <span>Flexible slots, Mon-Sat</span>
          </div>
        </div>
        {/* Trial Form Card */}
        <div className="bg-white/95 rounded-3xl shadow-2xl p-10 border border-blue-100 animate-fade-in-right relative overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 opacity-10 pointer-events-none select-none">
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Chalkboard" className="w-full h-full object-cover rounded-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-blue-800 mb-6 animate-fade-in-up">Book Your Free Trial</h2>
          {submitted ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg animate-fade-in-up">Thank you for booking a trial class! We will contact you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up delay-100">
              <div className="relative">
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full border-b-2 border-blue-200 bg-transparent py-3 px-2 text-gray-900 focus:outline-none focus:border-blue-600 transition-all duration-300"
                  placeholder=" "
                  autoComplete="off"
                />
                <label
                  className={`absolute left-2 top-3 text-gray-500 text-base transition-all duration-300 bg-white px-1 rounded pointer-events-none
                    ${(focus.name || form.name) ? '-top-5 text-sm text-blue-700' : ''}`}
                >Name*</label>
              </div>
              <div className="relative">
                <input
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full border-b-2 border-blue-200 bg-transparent py-3 px-2 text-gray-900 focus:outline-none focus:border-blue-600 transition-all duration-300"
                  placeholder=" "
                  autoComplete="off"
                />
                <label
                  className={`absolute left-2 top-3 text-gray-500 text-base transition-all duration-300 bg-white px-1 rounded pointer-events-none
                    ${(focus.phone || form.phone) ? '-top-5 text-sm text-blue-700' : ''}`}
                >Phone Number*</label>
              </div>
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full border-b-2 border-blue-200 bg-transparent py-3 px-2 text-gray-900 focus:outline-none focus:border-blue-600 transition-all duration-300"
                  placeholder=" "
                  autoComplete="off"
                />
                <label
                  className={`absolute left-2 top-3 text-gray-500 text-base transition-all duration-300 bg-white px-1 rounded pointer-events-none
                    ${(focus.email || form.email) ? '-top-5 text-sm text-blue-700' : ''}`}
                >Email Address*</label>
              </div>
              <div className="relative">
                {/* Static label for select */}
                <label className="block mb-1 text-gray-500 text-base font-medium">Select a course*</label>
                <select name="course" required value={form.course} onChange={handleChange} className="peer w-full border-b-2 border-blue-200 bg-transparent py-3 px-2 text-gray-900 focus:outline-none focus:border-blue-600 transition-all duration-300">
                  <option value="" disabled>Select a course*</option>
                  {courseOptions.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full border-b-2 border-blue-200 bg-transparent py-3 px-2 text-gray-900 focus:outline-none focus:border-blue-600 transition-all duration-300 resize-none min-h-[100px]"
                  placeholder=" "
                  autoComplete="off"
                />
                <label
                  className={`absolute left-2 top-3 text-gray-500 text-base transition-all duration-300 bg-white px-1 rounded pointer-events-none
                    ${(focus.message || form.message) ? '-top-5 text-sm text-blue-700' : ''}`}
                >Message*</label>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-blue-600 hover:border-blue-700 animate-fade-in-up delay-200">Submit now</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trial; 