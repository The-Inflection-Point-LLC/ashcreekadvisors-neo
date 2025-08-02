"use client"
import React, { useState } from 'react';

const MemberCard = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white p-6">
      <div className="flex flex-col items-start">
        <img
          src={member.image}
          alt={member.name}
          //className="w-full h-48 object-cover mb-4"
          className="w-full h-58 object-cover rounded-xl shadow mb-4" 
        />
        <h3 className="text-lg font-bold text-black mb-1 uppercase">
          {member.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 uppercase tracking-wide">
          {member.title}
        </p>
        
        <div className="text-gray-700 text-sm leading-relaxed min-h-[120px]">
          <p>
            {isExpanded ? member.fullDescription : member.shortDescription}
            {!isExpanded && member.fullDescription.length > member.shortDescription.length && '...'}
          </p>
          
          {member.fullDescription.length > member.shortDescription.length && (
            <button
              onClick={toggleExpand}
              className="mt-2 text-blue-500 text-sm hover:underline focus:outline-none"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;