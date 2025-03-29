import React from 'react'
import foodimage from '../../../public/assets/michal-robak-AN8iG8FlaN8-unsplash.jpg'

const Hero = () => {
    const stats = [
        { label: 'Food Saved', value: '150,000+ kg' },
        { label: 'Active Donors', value: '5,000+' },
        { label: 'Communities Served', value: '100+' },
        { label: 'Volunteer Network', value: '10,000+' },
      ];
    
      const categories = [
        'Restaurants', 'Hotels', 'Supermarkets', 'Bakeries', 'Catering', 'Events'
      ];
    
  return (
    <>
         <div className="relative bg-[#C7D9DD] pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#C7D9DD] to-[#ADB2D4] h-3/4" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-dark sm:text-5xl md:text-6xl lg:leading-tight">
              <span className="block"> Rescuing Surplus Food,</span>
              <span className="block text-purple-400"> Building a Sustainable Future</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Join thousands of donors and volunteers in our mission to reduce food waste and support those in need. Every meal saved is a step towards a sustainable and hunger-free future.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href='/donate-food'><button className="px-8 py-4 bg-purple-300 text-black rounded-lg font-medium hover:bg-purple-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Donate Food Now
              </button></a>
              <a href='/volunteer'><button className="px-8 py-4 bg-white text-purple-500 border-2 border-purple-900 rounded-lg font-medium hover:bg-purple-100 transition-colors">
                Become a Volunteer
              </button></a>
            </div>

            <div className="mt-12">
              <p className="text-sm font-semibold text-gray-400 uppercase">Trusted by organizations from</p>
              <div className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                {categories.map((category) => (
                  <span key={category} className="px-4 py-2 bg-white rounded-full text-sm text-gray-500 shadow-sm">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C7D9DD] to-[#D5E5D5] rounded-3xl transform rotate-3 scale-105" />
            <img
              className="relative rounded-3xl shadow-2xl"
              src={foodimage}
              alt="Food donation"
            />
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-300">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero