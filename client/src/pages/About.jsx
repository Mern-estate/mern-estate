import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-24 bg-white rounded-xl shadow-md">
      <div className="opacity-0 animate-fadeIn animation-delay-200">
        <h1 className="text-5xl font-extrabold mb-10 text-gray-900 tracking-tight">
          About <span className="text-gray-700">SewaGhar</span>
        </h1>

        <p className="mb-8 text-xl text-gray-700 leading-relaxed">
          Welcome to <strong>SewaGhar</strong>, your trusted partner in real estate. We are passionate about helping you find not just a property, but a place to call home. Our team is committed to providing personalized support and expert guidance tailored to your unique needs.
        </p>

        <p className="mb-8 text-xl text-gray-700 leading-relaxed">
          Whether you are buying, selling, or renting, we strive to make the process simple, transparent, and enjoyable. With extensive knowledge of the local market and a focus on customer satisfaction, we aim to exceed your expectations every step of the way.
        </p>

        <p className="mb-12 text-xl text-gray-700 leading-relaxed">
          At SewaGhar, we believe in building lasting relationships based on trust and integrity. Let us help you find your perfect space and make your real estate journey a positive experience.
        </p>

        <blockquote className="text-gray-900 italic border-l-8 border-gray-300 pl-8 text-2xl font-semibold tracking-wide mb-16">
          “Let <strong>SewaGhar</strong> be the key for unlocking your dream home.”
        </blockquote>

        {/* Contact Us Section */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Get in Touch</h2>

          <div className="flex flex-col md:flex-row md:justify-between md:space-x-12 text-gray-700 text-lg">
            <div className="flex items-center mb-6 md:mb-0">
              <svg
                className="w-6 h-6 mr-3 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.44 12.44 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +977 98123 45678
            </div>

            <div className="flex items-center mb-6 md:mb-0">
              <svg
                className="w-6 h-6 mr-3 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4 4h16v16H4z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@sewaghar.com
            </div>

            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Biratnagar-6, Morang, Nepal
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </div>
  );
}
