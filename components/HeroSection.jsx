import React from "react";

const HeroSection = () => {
  return (
    <div id="home" className="flex items-center justify-center min-h-[calc(85vh-120px)] bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('/hero.jpg')`,
        }}>
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Company Name with Background */}
        <div className="block mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white bg-black/90 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg">
            Ash Creek Capital Advisors
          </h1>
        </div>

        {/* Description with Background */}
        <div className="block">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white bg-black/90 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg leading-relaxed max-w-4xl">
            Business advisory and investment banking services
            <br className="hidden sm:block" />
            to small and medium-sized business
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
