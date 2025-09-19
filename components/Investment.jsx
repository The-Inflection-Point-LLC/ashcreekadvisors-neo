import React from "react";

const Investment = () => {
  return (
    <div className="flex items-center justify-center p-4 lg:mt-[40rem]">
      <div className="relative max-w-6xl w-full">
        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Image container */}
          <div className="w-full max-w-4xl mx-auto relative">
            <img
              src="/growing_plants.jpg"
              alt="Growing plants on coins representing investment growth"
              className="w-full h-90 object-cover rounded-xl shadow-lg"
            />

            {/* Text Box - top-left positioned */}
            <div className="absolute -top-96 -left-20 z-10">
              <div className="bg-white rounded-2xl shadow-xl p-8 w-[550px] max-w-full">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Investments
                </h1>

                <div className="text-lg space-y-4 text-gray-700">
                  <p>
                    Most of our investments have been made in conjunction with
                    family offices and other investment groups. It is not
                    unusual for us to create a Special Purpose Entity (SPE), a
                    limited liability company, for investing in situations where
                    the investment may be larger. There is no minimum
                    investment.
                  </p>

                  <p>
                    Before we invest, we conduct extensive due diligence to make
                    sure the economic, marketing and financial models all work
                    together.
                  </p>

                  <p>
                    Finally, one of the businesses funded back in 2019 has
                    become a Unicorn and will exit the year with a $15 billion
                    valuation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden mt-4">
          {/* Text Box */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
              Investments
            </h1>

            <div className="text-lg space-y-4 text-gray-700">
              <p>
                Most of our investments have been made in conjunction with
                family offices and other investment groups. It is not unusual
                for us to create a Special Purpose Entity (SPE), a limited
                liability company, for investing in situations where the
                investment may be larger. There is no minimum investment.
              </p>

              <p>
                Before we invest, we conduct extensive due diligence to make
                sure the economic, marketing and financial models all work
                together.
              </p>

              <p>
                Finally, one of the businesses funded back in 2019 has become a
                Unicorn and will exit the year with a $1 billion valuation.
              </p>
            </div>
          </div>

          {/* Image Below Text */}
          <div className="w-full">
            <img
              src="/growing_plants.jpg"
              alt="Growing plants on coins representing investment growth"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
