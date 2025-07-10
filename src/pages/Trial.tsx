import React, { useState } from 'react';

const Trial: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-lg">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Book Trial Class</h1>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded">Thank you for booking a trial class! We will contact you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8 space-y-4">
          <input name="name" type="text" required placeholder="Name*" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="phone" type="tel" required placeholder="Phone Number*" value={form.phone} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="email" type="email" required placeholder="Email Address*" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
          <select name="course" required value={form.course} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="">Select a course*</option>
            <option>NEET Coaching</option>
            <option>JEE MAIN</option>
            <option>JEE Advance</option>
            <option>NTSE Coaching</option>
            <option>Olympiads Coaching</option>
            <option>XTSE Exam Coaching</option>
            <option>11th and 12th Class Coaching Institute</option>
            <option>Coaching or CBSE Students</option>
            <option>Science Coaching</option>
          </select>
          <textarea name="message" required placeholder="Message*" value={form.message} onChange={handleChange} className="w-full border p-2 rounded" />
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800 transition w-full">Submit now</button>
        </form>
      )}
    </div>
  );
};

export default Trial; 