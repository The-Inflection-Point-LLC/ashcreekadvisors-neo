import React from "react";

const WhoAreWe = () => {
  return (
    <section id="who-we-are" className="w-full bg-[#f1f1f1] py-12">
    <div className="flex items-center justify-center p-4 lg:mt-52">
      <div className="relative max-w-6xl w-full">
        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Image container */}
          <div className="w-full max-w-4xl mx-auto relative">
            <img
              src="/places.png"
              alt="Growing plants on coins representing investment growth"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />

            {/* Text Box - top-right positioned */}
            <div className="absolute -top-60 left-0 z-10">
              <div className="bg-white rounded-2xl shadow-xl p-8 w-[550px] max-w-full">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Who We Are
                </h1>

                <div className="space-y-4 text-gray-700">
                  <p>
                    We are 25+ business leaders with over 1,000 cumulative years
                    of leadership experience running businesses across a broad
                    array of industries. And we bring that experience to bear
                    for every one of our clients or investments.
                  </p>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                      Our Industry Experience
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                      <ul className="list-disc list-outside text-gray-700 pl-6">
                        <li>Healthcare</li>
                        <li>Mergers & Acquisitions</li>
                        <li>Real Estate</li>
                        <li>Retail</li>
                        <li>Financial Services</li>
                        <li>Consumer Marketing</li>
                        <li>Energy and Industrial Technology</li>
                      </ul>

                      <ul className="list-disc list-inside text-gray-700 mt-4 md:mt-0">
                        <li>Branding</li>
                        <li>Insurance</li>
                        <li>Private Equity</li>
                        <li>Investment Banking</li>
                        <li>Telecommunications</li>
                        <li>Information Technology</li>
                        <li>Human Resources</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Text Box */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 w-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Across Industries
            </h1>

            <div className="space-y-4 text-gray-700 text-base">
              <p>
                Almost all of the companies in which Ash Creek members have
                invested are businesses that offer disruptive and/or new
                technologies that have very little competition in their areas of
                expertise across 12 industry verticals:
              </p>

              <ul className="list-disc pl-5">
                <li>Adhesion: Mussel Polymers</li>
                <li>Asset Management: Diamond Standard</li>
                <li>Biotechnology: 22nd Century Group</li>
                <li>
                  Consumer E-Commerce: Kickly, Thirstie, Raydiant, Swaponz,
                  Ucode
                </li>
                <li>Communications: Ping</li>
                <li>Cybersecurity: BluSapphire, Cyber Safety</li>
                <li>Environmental: 7ac, Nanovapor, Zoneflow</li>
                <li>
                  FinTech/Financial Services: Foundation CREF, Ion Pacific
                </li>
                <li>Healthcare: Accure Acne, Asenda Health, The Safe Group</li>
                <li>Media: Infillion</li>
                <li>Social Media/Web 3.0: The Infinite Reality</li>
                <li>Solar: Toledo Solar</li>
              </ul>
            </div>
          </div>

          {/* Image Below Text */}
          <div className="w-full">
            <img
              src="/places.png"
              alt="Growing plants on coins representing investment growth"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default WhoAreWe;
