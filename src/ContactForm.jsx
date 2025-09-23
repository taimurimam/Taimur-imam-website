
import React from 'react'
import { useState, useEffect , form } from 'react';

export const ContactForm = () =>{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission (API, email service, etc.)
    alert(e.target.name.value);
  };

  return (
    <div className="max-w-2xl mx-auto p-6  shadow-l mb-8 rounded-lg mt-16">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div>
            <label className="block text-black font-light mb-2 text-start">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white px-4 py-2  rounded-lg font-light focus:outline-none focus:ring-2 focus:ring-linden"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-start block text-black font-light mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2  rounded-lg  font-light focus:outline-none focus:ring-2 focus:ring-linden  bg-white"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-start block text-black font-light mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2  rounded-lg font-light focus:outline-none focus:ring-2 focus:ring-linden  bg-white "
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="sbmit"
          className=" bg-black w-full bg-linden text-white py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}


export default ContactForm