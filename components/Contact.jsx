"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
    subject: "Ashcreekadvisors Email",
    checkboxes: {
      setupCall: false,
      lookingForInvestment: false,
      lookingForHelp: false,
      haveQuestion: false,
      haveThirdParty: false,
      interested: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      checkboxes: {
        ...prev.checkboxes,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const checkedValue = Object.keys(formData.checkboxes).filter(
      (key) => formData.checkboxes[key]
    );

    const payload = {
      checkedValue,
      name: formData.name,
      companyName: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      subject: formData.subject,
    };

    try {
      const res = await fetch(
        "https://api.ashcreekadvisors.com/api/emailSender/contact/newContact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      
      setFormData({
        name: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
        subject: "",
        checkboxes: {
          setupCall: false,
          lookingForInvestment: false,
          lookingForHelp: false,
          haveQuestion: false,
          haveThirdParty: false,
          interested: false,
        },
      });
    } catch (err) {
      console.error("❌ Error submitting form:", err);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-white flex items-center justify-center px-8"
    >
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
              {Object.keys(formData.checkboxes).map((key) => (
                <label key={key} className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name={key}
                    checked={formData.checkboxes[key]}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-4 h-4 border border-gray-300"
                  />
                  <span className="text-gray-700">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm mb-2">Name:</label>
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
                <label className="block text-gray-700 text-sm mb-2">Phone:</label>
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
