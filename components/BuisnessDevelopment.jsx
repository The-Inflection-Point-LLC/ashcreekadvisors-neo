import React from "react";

const BuisnessDevelopment = () => {
  return (
    <section className="w-full bg-[#f1f1f1] py-12">
    <div className="flex items-center justify-center p-4">
      <div className="relative max-w-6xl w-full">
          {/* Desktop Layout */}
          <div className="hidden lg:block relative">
            {/* Centered Image */}
            <div className="flex justify-center">
              <img
                src="BD.jpg"
                alt="Business professionals in a meeting"
                className="w-full max-w-4xl h-98 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Overlapping Text Box - Half on image, half below */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-48 z-10">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl w-full">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  Business development
                </h1>

                <div className="text-lg space-y-4 text-gray-700">
                  <p>
                    Especially for startups, most entrepreneurs have a keen eye
                    for market needs, product viability and have built a
                    workable technology, product, or solution. But not all of
                    them have a competitive advantage in distribution.
                  </p>

                  <p>
                    And that makes all the difference.
                  </p>

                  <p>
                    Where needed, Ash Creek members roll up their sleeves to
                    make warm introductions and/or to follow through to
                    enterprise sales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Text Box */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Business development
              </h1>

              <div className="text-lg space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Especially for startups, most entrepreneurs have a keen eye
                  for market needs, product viability and have built a workable
                  technology, product, or solution. But not all of them have a
                  competitive advantage in distribution.
                </p>

                <p className="font-medium">
                  And that makes all the difference.
                </p>

                <p>
                  Where needed, Ash Creek members roll up their sleeves to make
                  warm introductions and/or to follow through to enterprise
                  sales.
                </p>
              </div>
            </div>

            {/* Image Below Text */}
            <div className="w-full">
              <img
                src="BD.jpg"
                alt="Business professionals in a meeting"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      </section>
  );
};

export default BuisnessDevelopment;
