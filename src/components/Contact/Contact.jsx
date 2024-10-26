import React from 'react';

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Contact Me</h2>
        <p className="text-center text-gray-600 mb-6">I'd love to hear from you! Please fill out the form below.</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-1 border rounded-lg text-gray-700 bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg text-gray-700 bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 mt-1 border rounded-lg text-gray-700 bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

