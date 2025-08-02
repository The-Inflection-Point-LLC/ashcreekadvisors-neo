"use client"
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
    checkboxes: {
      setupCall: false,
      lookingForInvestment: false,
      lookingForHelp: false,
      haveQuestion: false,
      haveThirdParty: false,
      interested: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      checkboxes: {
        ...prev.checkboxes,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id="contact" className="min-h-screen bg-white flex items-center justify-center px-8">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-normal text-black leading-tight mb-6">
                Tell us a little bit about you and your company.
              </h1>
              <p className="text-gray-600 text-lg mb-2">
                And we will get right back to you.
              </p>
              <p className="text-gray-600 text-lg">
                We look forward to hearing from you!
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="setupCall"
                  checked={formData.checkboxes.setupCall}
                  onChange={handleCheckboxChange}
                  className="mt-1 w-4 h-4 border border-gray-300"
                />
                <span className="text-gray-700">Set up a call</span>
              </label>

              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="lookingForInvestment"
                  checked={formData.checkboxes.lookingForInvestment}
                  onChange={handleCheckboxChange}
                  className="mt-1 w-4 h-4 border border-gray-300"
                />
                <span className="text-gray-700">Looking for an investment</span>
              </label>

              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="lookingForHelp"
                  checked={formData.checkboxes.lookingForHelp}
                  onChange={handleCheckboxChange}
                  className="mt-1 w-4 h-4 border border-gray-300"
                />
                <span className="text-gray-700">Looking for help with my business</span>
              </label>

              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="haveQuestion"
                  checked={formData.checkboxes.haveQuestion}
                  onChange={handleCheckboxChange}
                  className="mt-1 w-4 h-4 border border-gray-300"
                />
                <span className="text-gray-700">Have a question</span>
              </label>

              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="haveThirdParty"
                  checked={formData.checkboxes.haveThirdParty}
                  onChange={handleCheckboxChange}
                  className="mt-1 w-4 h-4 border border-gray-300"
                />
                <span className="text-gray-700">Have a 3rd-party investment</span>
              </label>

              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="interested"
                  checked={formData.checkboxes.interested}
                  onChange={handleCheckboxChange}
                  className="mt-1 w-4 h-4 border border-gray-300"
                />
                <span className="text-gray-700">Interested</span>
              </label>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 bg-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Company Name:
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 bg-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  E-Mail:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 bg-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Phone:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 bg-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 bg-transparent resize-none"
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="bg-gray-600 text-white px-8 py-3 text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;