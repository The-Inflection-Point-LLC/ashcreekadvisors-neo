"use client";
import React from 'react';

const MerchantSection = () => {
  return (
      <div className="relative max-w-7xl mx-auto px-4 py-8 lg:py-16 my-4">
        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Background Image */}
          <div className="absolute right-10 top-6 w-3/5 h-full">
            <img
              src="/bricks.jpg"
              alt="Construction workers laying bricks"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          
          {/* Overlapping Text Box */}
          <div className="relative z-10 pt-4">
            <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg ml-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                A unique merchant bank
              </h1>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Ash Creek is a boutique Merchant Bank dedicated to assisting 
                  businesses who have a clear vision of their goals and 
                  objectives.
                </p>
                
                <p className="text-lg">
                  Over 20+ years and 30+ investments, Ash Creek members 
                  have assisted small and mid-market companies to accelerate 
                  revenue growth and, only then, provide investors with a 
                  meaningful return.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Text Box */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              A unique merchant bank
            </h1>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Ash Creek is a boutique Merchant Bank dedicated to assisting 
                businesses who have a clear vision of their goals and 
                objectives.
              </p>
              
              <p className="text-lg">
                Over 20+ years and 30+ investments, Ash Creek members 
                have assisted small and mid-market companies to accelerate 
                revenue growth and, only then, provide investors with a 
                meaningful return.
              </p>
            </div>
          </div>
          
          {/* Image Below Text */}
          <div className="w-full">
            <img
              src="/bricks.jpg"
              alt="Construction workers laying bricks"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
  );
};

export default MerchantSection;