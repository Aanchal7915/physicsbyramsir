import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-lg">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h1>
      <div className="mb-6">
        <p className="mb-1">C5A/306B, Janakpuri, New Delhi - 110058, 110078</p>
        <p className="mb-1">Email: <a href="mailto:rampraveshxlv@gmail.com" className="underline text-blue-700">rampraveshxlv@gmail.com</a></p>
        <p>Phone: <a href="tel:+919810082561" className="underline text-blue-700">+91 98100 82561</a></p>
      </div>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded">Thank you for reaching out! We will get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8 space-y-4">
          <input name="name" type="text" required placeholder="Name*" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="email" type="email" required placeholder="Email Address*" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
          <textarea name="message" required placeholder="Message*" value={form.message} onChange={handleChange} className="w-full border p-2 rounded" />
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800 transition w-full">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact; 