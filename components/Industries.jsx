import React from "react";

const Industries = () => {
  return (
    <section className="w-full bg-[#f1f1f1] py-12">
    <div className="flex items-center justify-center p-4">
      <div className="relative max-w-6xl w-full">
        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Image container */}
          <div className="w-full max-w-4xl mx-auto relative">
            <img
              src="/industries.png"
              alt="Growing plants on coins representing investment growth"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />

            {/* Text Box - top-right positioned */}
            <div className="absolute bottom-0 right-0 z-10">
              <div className="bg-white rounded-2xl shadow-xl p-8 w-[550px] max-w-full">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Across Industries
                </h1>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Almost all of the companies in which Ash Creek members have
                    invested are businesses that offer disruptive and/or new
                    technologies that have very little competition in their
                    areas of expertise across 12 industry verticals:
                  </p>

                  <ul className="list-disc pl-5">
                    <li>Adhesion: Mussel Polymers</li>
                    <li>Asset Management: Diamond Standard</li>
                    <li>AI: R4 Technologies, Mimesis</li>
                    <li>
                      Consumer E-Commerce: Kickly, Swaponz</li>
                    <li>Cybersecurity: Cyber Safety</li>
                    <li>Environmental: 7ac, Nanovapor, Zoneflow</li>
                    <li>
                      FinTech/Financial Services: Foundation CREF, Ion Pacific
                    </li>
                    <li>
                      Healthcare: Accure Acne, Asenda Health, The Safe Group
                    </li>
                    <li>Media: Infillion</li>
                    <li>Social Media/Web 3.0: Napster</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden mt-4">
          {/* Text Box */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 w-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Across Industries
            </h1>

            <div className="space-y-4 text-gray-700 text-base">
              <p>
                Almost all of the companies in which Ash Creek members have
                invested are businesses that offer disruptive and/or new
                technologies that have very little competition in their
                areas of expertise across 12 industry verticals:
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
                <li>
                  Healthcare: Accure Acne, Asenda Health, The Safe Group
                </li>
                <li>Media: Infillion</li>
                <li>Social Media/Web 3.0: The Infinite Reality</li>
                <li>Solar: Toledo Solar</li>
              </ul>
            </div>
          </div>

          {/* Image Below Text */}
          <div className="w-full">
            <img
              src="/industries.png"
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

export default Industries;
